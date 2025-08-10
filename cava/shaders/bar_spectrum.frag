#version 330

in vec2 fragCoord;
out vec4 fragColor;

// bar values. defaults to left channels first (low to high), then right (high to low).
uniform float bars[512];

uniform int bars_count;      // number of bars (left + right)
uniform int bar_width;       // bar width (unused here)
uniform int bar_spacing;     // space between bars

uniform vec3 u_resolution;   // window resolution

// Colors
uniform vec3 bg_color;       // background color
uniform vec3 fg_color;       // foreground color (will be set to #94E2D5)

// Gradient (not used but still present for completeness)
uniform int gradient_count;  // gradient is disabled (set to 0)
uniform vec3 gradient_colors[8];

vec3 normalize_C(float y, vec3 col_1, vec3 col_2, float y_min, float y_max)
{
    float yr = (y - y_min) / (y_max - y_min);
    return col_1 * (1.0 - yr) + col_2 * yr;
}

void main()
{
    // Get x coordinate in pixels
    float x = u_resolution.x * fragCoord.x;

    // Determine which bar this pixel is part of
    int bar = int(bars_count * fragCoord.x);

    // Width of a single bar including spacing
    float bar_size = u_resolution.x / bars_count;

    // Height of the current bar from audio data
    float y = bars[bar];

    // Minimum height to ensure visibility
    if (y * u_resolution.y < 1.0)
    {
        y = 1.0 / u_resolution.y;
    }

    // Draw bar
    if (y > fragCoord.y)
    {
        // Respect bar spacing
        if (x > (bar + 1) * bar_size - bar_spacing)
        {
            fragColor = vec4(bg_color, 1.0);
        }
        else
        {
            // Gradient disabled: use flat foreground color
            fragColor = vec4(fg_color, 1.0);
        }
    }
    else
    {
        fragColor = vec4(bg_color, 1.0);
    }
}
