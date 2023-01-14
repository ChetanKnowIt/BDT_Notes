#!/usr/bin/python3

import sys

counts = {}

for line in sys.stdin:
    fruit = line.split()[0]
    if fruit in counts:
        counts[fruit] += 1
    else:
        counts[fruit] = 1

for fruit in sorted(counts.keys()):
    print(fruit,'\t',counts[fruit])
