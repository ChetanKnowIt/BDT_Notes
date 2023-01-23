#!/usr/bin/python3

import sys
cnt = 0
for line in sys.stdin:
    words = line.split(',')
    if words[1] == 'video' and '2017' in words[2] and words[2].startswith('2'):
        print("Shares: ",words[5])
