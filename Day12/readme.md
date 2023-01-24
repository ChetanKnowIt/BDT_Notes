# Notes:

1. The Big Data Ecosystem
	1. Topics that remain in BDT course - Hive, Hbase, Airflow, Kafka and Spark
	2. The Hadoop framework enables processing large datasets which reside in the form of clusters.
	3. Hadoop Ecosystem is a platform that provides services to solve big data problems
	4. Hadoop Ecosystem includes HDFS + YARN + MapReduce, Spark(in-memory processing), PIG+HIVE & Hbase (DB), Mahout & Spark MLLib (ML algos), Solar & Lucene(Searching), Zookeper(Managing Nodes), Oozie(Job Scheduling), Sqoop (RDBMS Connector), Chukwa (Monitoring), Flume (Getting streaming data)
	5. Apache Pig is a query processing engine. It has Pig Latin language.
	6. Mahout provides functionalities of ML
	7. Spark is alternative for Hadoop
	8. Airflow allows automation of tasks with scripts using command line utilities
	9. Kafka is a framework for read, sore and analyse streaming data
	
2. Hive
	1. Hive is a data warehouse infrastructure tool to produce structured data in Hadoop
	2. On top of HDFS for quering and analyzing 
	3. SQL functionality for analytics over distributed data
	4. Hive is not-
		1. OLTP
		2. REAL TIME QUERY
	5. Characteristics:
		1. Query structured data only
		2. Hive framework provides optimzation and usability
		3. Formats: TEXTFILE, SEQUENCEFILE, ORC, RCFILE
		4. Derby db is used for single user and MySQL for multi user
	6. Features:
		1. Indexing
		2. RDBMS for metadata storage
		3. built in UDF-user defined functions
		4. DEFLATE, BWT, snappy - compressed data
		5. built for OLAP
		6. HiveQL is used 
	7. Architecture:
		1. HDFS or HBase for DB at bottom
		2. UI on top
		3. Hive on the right
		4. MetaStore on right
		5. 9870 port number for ui
		6. Hive Command Line
	8. Working:
		1. Query fired
		2. Get Plan
		3. Get Metadata
		4. Send Metadata
		5. Send Plan
		6. Execute Plan
		7. Execute Job
		8. Metadata Ops 	
		9. Finish
		10. Send Result 
	10. Hive Setup
		1. sudo apt-get install axel
		2. axel -n 3 -s 5242880 https://downloads.apache.org/hive/hive-3.1.3/apache-hive-3.1.3-bin.tar.gz 	
		3. rename hive
		4. sudo mv hive/ /usr/local
		5. sudo chown ubuntu:ubuntu -R /usr/local/hive
		6. edit ~/.bashrc
			```
				export HIVE_HOME=/usr/local/hive/
				export PATH=$PATH:$HIVE_HOME/bin
				export HADOOP_USER_CLASSPATH_FIRST=true 
			```
		7.  source ~/.bashrc
		8.  hadoop fs -mkdir /tmp
		9.  hadoop fs -mkdir -p /user/hive/warehouse
		10. hadoop fs -chmod g+w /tmp
		11. hadoop fs -chmod -R g+w /user/hive/warehouse
	11. Configure Hive
		1. cp /usr/local/hive/conf/hive-env.sh.template /usr/local/hive/conf/hive-env.sh 	
		2. give path @ line number 47: export HADOOP_HOME=/usr/local/hadoop
		3. set java correctly on hadoop-env.sh and bashrc if error occurs
		4. gedit /usr/local/hadoop/etc/hadoop/hadoop-env.sh
		5. gedit ~/.bashrc
		6. we give g+w as group write should be enabled for distributed data warehouse

3. Working With Hive:
	1. Data Types are classified into 4 types:
		1. Column Types
		2. Literals
		3. Null Values
		4. Complex Types 	
	2. Column Types:
		1. Integer Types: TINYINT, SMALLINT, INT, BIGINT
			
			| Data type |                          Range                          | Range expression | Storage |
			|:---------:|:-------------------------------------------------------:|:----------------:|:-------:|
			| BIGINT    | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -2^63 to 2^63-1  | 8 Bytes |
			| INT       | -2,147,483,648 to 2,147,483,647                         | -2^31 to 2^31-1  | 4 Bytes |
			| SMALLINT  | -32,768 to 32,767                                       | -2^15 to 2^15-1  | 2 Bytes |
			| TINYINT   | 0 to 255                                                | 2^0-1 to 2^8-1   | 1 Byte  |

		2. String Types: VARCHAR, CHAR
			1. Plain English - CHAR
			2. UNICODE Chars - VARCHAR 	
	
			| Data type |                          Range                          | Range expression | Storage |
			|:---------:|:-------------------------------------------------------:|:----------------:|:-------:|
			| CHAR 		  | 0 to 255                                                | 2^0-1 to 2^8-1   | 1 Byte  |	
			| VARCHAR   | 0 to 65535 				                                      | 2^0-1 to 2^-1    | 2 Bytes |

	3. First Query:
		1. Init: We delete the metastore as we had started Hive before derby init
		```
			$rm -rf metastore_db/
			$schematool -dbType derby -initSchema

		```  
		you will see 
		```
			Initialization script completed
			schemaTool completed
		```
		2. Start hive:
		```
			hive> show databases;
			OK
			default
			Time taken: 1.443 seconds, Fetched: 1 row(s)
		```
		2. Command:
		```
			CREATE DATABASE | SCHEMA [IF NOT EXISTS]
			<database name>;

		```

		3. Create Db: Create Tables is a statement used to create a table in Hive.

		SET hive.exec.dynamic.partition = true;
		SET hive.exec.dynamic.partition.mode = nonstrict;
		SET hive.exec.max.dynamic.partitions = 10000;
		SET hive.exec.max.dynamic.partitions.pernode = 1000; 	
		``` 
			hive> create database if not exists college;
			OK
			Time taken: 0.174 seconds

		```
	4. Docs: https://cwiki.apache.org/confluence/display/Hive/LanguageManual
	5. 