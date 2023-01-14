#!/usr/bin/python3
import sys
current_word = None
current_count =0
for line in sys.stdin:
	word, count =line.split()
	count =int(count)
	if current_word==word:
		current_count += count
	else:
		if current_word:
			print(current_word,current_count,sep='\t')
		current_word =word
		current_count =count

if current_word==word:
	print(current_word,current_count,sep='\t')