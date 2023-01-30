#!/usr/bin/python3

import sys
cnt = 0
for line in sys.stdin:
    words = line.split()
    if words[4] == 'true':
        print(words[1])
    	
    
