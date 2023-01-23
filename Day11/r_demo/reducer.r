#!/usr/bin/Rscript
input = file('stdin', open = 'r')
current_word = ''
current_count = 0
while (length(line <- readLines(input, n = 1, warn=FALSE)) > 0){
		val <- unlist(strsplit(line, "\t"))
		word <- val[1]
		count <- as.integer(val[2])
		if(current_word == word)
				current_count = current_count + count
		else{
				if(current_word != '')
						cat(current_word, current_count, '\n', sep = '\t')
				current_word = word
				current_count = count
		}
}
if(current_word == word)
		cat(current_word, current_count, '\n', sep = '\t')