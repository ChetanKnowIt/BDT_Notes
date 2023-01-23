#!/usr/bin/python3

import sys
max_haha = []

flag = 0
for line in sys.stdin:         
    while(flag):
        words = line.split(',')
        max_haha.append(int(words[9]))
        break;
    flag = 1;

print(words[2])
print(max(max_haha))
#3/13/2018 7:07