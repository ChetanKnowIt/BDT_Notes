#!/usr/bin/python3

import sys
cnt = 0
for line in sys.stdin:
    words = line.split(' ')
    if float(words[2]) >= 60:
        print(words[1])
    	
    
