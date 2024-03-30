#!/bin/bash

NUM=0;

for fd in *; do
    if [ -f "$fd" ] || [ -d "$fd" ]; then
	((NUM++)) 
    fi 
done

echo "$NUM";
