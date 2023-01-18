# Notes


### TASK:
1. Find average number of shares per month in year 2017
2. Find total number of reactions on the link


### Topics:
1. Map-Only job
	* by setting job.setNumreduceTasks(0) we can avoid reduce phase.
	* will make number of reducer as 0, this only mapper will do complete task.
	* Advantage:
		a. saves time in sorting and shuffle 
		b. shuffling - sorting are responsible for sorting keys in ascending order. 
										Then grouping values based on same keys.
										This phase is very time expensive. 
		c. also save network congestion.
		d. output directly written to HDFS.


### HW:
with fb dataset: 
1. find data and type of most funny post

with forestfire dataset:
1. in august month how much area was covered by fires?