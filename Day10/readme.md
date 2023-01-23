NOTES:
======


1. TASK: employee partitioner
2. TASK: hadoop streaming for word count
3. TASK: hadoop streaming for average age 
			hadoop jar hadoop-streaming-3.3.4.jar -file mapper.py -mapper mapper.py -file reducer.py -reducer reducer.py -input /input2/ages.txt -output /ages_streaming