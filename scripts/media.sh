#!/bin/bash
playerctl metadata --format "  {{title}} - {{artist}}" 2>/dev/null | cut -c1-60
