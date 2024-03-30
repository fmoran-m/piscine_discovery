#!/bin/bash

NUM=0

if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "$@"; do
	if [ $NUM -lt 3 ]; then
	    echo "$arg"
	    ((NUM++))
	fi
    done
fi
