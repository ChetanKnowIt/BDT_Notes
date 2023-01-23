# NOTES:
========

### 1. TASK: mapper python code to read items

  * INPUT:	fruits.txt

Apple Orange Mango
Orange Grapes Plum
Apple Plum Mango
Apple Apple Plum

  * OUTPUT: 

Apple 1
Orange 1
Mango 1
Orange 1
Grapes 1
Plum 1
Apple 1
Plum 1
Mango 1
Apple 1
Apple 1
Plum 1


### 2. TASK: reducer python code to count the items

  * INPUT: sort names of items with their occurence 1

Apple 1
Apple 1
Apple 1
Apple 1
Grapes 1
Mango 1
Mango 1
Orange 1
Orange 1
Plum 1
Plum 1
Plum 1

  * OUTPUT:
 
Apple 5
Grapes 1
Mango 2
Orange 2
Plum 3


### 3. TASK: wordcount in java
	- class WordCount
	  * class WordMapper
	  	1. overrides map() method
	  	2. tokenizes input into word, int 1
	  	3. writes word and int 1 to context
	  	4. context will be used by WordReducer

	  * class WordReducer
	  - main method



### 4. TASK: run the command
 
 a. compile java program with hadoop library

 		javac WordCount.java -classpath hadoop-core-1.2.1.jar 

 b. create a .jar or java archive for program
 		cd ..
 		jar -cvf wordcount.jar -C wordcount/ .



 c. decide input and output folder
 	  
 	  ubuntu@ubuntu:~$ jps
		13667 Jps
		ubuntu@ubuntu:~$ start-all.sh
		WARNING: Attempting to start all Apache Hadoop daemons as ubuntu in 10 seconds.
		WARNING: This is not a recommended production deployment configuration.
		WARNING: Use CTRL-C to abort.
		Starting namenodes on [localhost]
		Starting datanodes
		Starting secondary namenodes [ubuntu]
		2023-01-14 15:10:31,367 WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
		Starting resourcemanager
		Starting nodemanagers
		ubuntu@ubuntu:~$ jps
		13889 NameNode
		14035 DataNode
		14627 NodeManager
		14794 Jps
		14491 ResourceManager
		14237 SecondaryNameNode
		ubuntu@ubuntu:~$ hadoop fs -mkdir /input1


 d. execute .jar file on hdfs
 		
 		hadoop jar wordcount.jar WordCount /input1 /output1



 e. check the output on hdfs

 		hadoop fs -cat /output1/part-r-00000

 ERROR: mismatch class

 https://www.baeldung.com/java-lang-unsupportedclassversion

 SOLUTION: change javac version and compile again

 		sudo update-alternatives --config javac
 		2
