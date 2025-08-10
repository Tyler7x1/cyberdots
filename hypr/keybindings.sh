#!/bin/bash

BACKEND=wayland

if pgrep -x "rofi" > /dev/null; then
    pkill rofi
fi

x_mon=$(hyprctl -j monitors | jq '.[] | select(.focused==true) | .width')
y_mon=$(hyprctl -j monitors | jq '.[] | select(.focused==true) | .height')
hypr_scale=$(hyprctl -j monitors | jq '.[] | select (.focused == true) | .scale' | sed 's/\.//')

width=$((x_mon * hypr_scale / 230))
height=$((y_mon * hypr_scale / 100))

max_width=1200
max_height=1000

percentage_width=70
percentage_height=70

dynamic_width=$((width * percentage_width / 100))
dynamic_height=$((height * percentage_height / 100))

dynamic_width=$(($dynamic_width > $max_width ? $max_width : $dynamic_width))
dynamic_height=$(($dynamic_height > $max_height ? $max_height : $dynamic_height))

GDK_BACKEND=$BACKEND yad --width=$dynamic_width --height=$dynamic_height \
    --center \
    --title="Keybindings" \
    --no-buttons \
    --list \
    --column=Key: \
    --column=Description: \
    --timeout-indicator=bottom \
" + SHIFT + K" "Show all KeyBindings" \
" + Enter" "Terminal" \
" + C" "Kills Active Window" \
" + E" "File Manager" \
" + F" "FullScreen" \
" + V" "Toggle Floating" \
" + P" "Dwindle" \
" + T" "Toggle Split windows" \
" + Esc" "Logout Menu" \
" + L" "Lock Screen" \
" + Alt + Space" "Emoji" \
" + Print" "Take Full Screenshot" \
" + Shift + Print" "Screenshot selected Area" \
"Alt + Print" "Active window screenshot" \
" + left_mouse" "move window" \
" + right_mouse" "resize window" \
" + H" "move focus to left window" \
" + L" "move focus to right arrow" \
" + K" "move focus to upper window" \
" + J" "move focus to lower window" \
" + 1 or 2 or..." "switch workspace" \
" + mouse_down" "next workspace" \
" + mouse_up" "previous workspace" \
" + Shift + 1 or 2 or..." "Moves active window silently to that workspace" \
" + Tab" "Toggles Special Workspace" \
