NOTES:
======


1. TASK: write a MapReduce program to find average ages of students from a text file
	* we write our own ``` boolean isNumber() ``` method inside ```AgeMapper```
	* changed class name to Ages with AgeMapper and AgeReducer as the classes for Mapper and Reducer
	* added : 
		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(IntWritable.class);

	RUN:
	hadoop jar ages.jar Ages /input2 /output2