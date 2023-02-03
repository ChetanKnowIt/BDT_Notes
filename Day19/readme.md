# NOTES

1. Spark ML
	1. diabetes.csv - pima indians dataset
	2. bank-note-authentication - uci
2. Spark Dynamic Query
	1. spark-submit ~/Downloads/BDT/Day19/Spark_Dynamic_Query/spark-hive-extract.py 
3. Apache Kafka 
	1. Based on distributed streaming process
	2. Publish-subscribe messaging system
	3. Developed by LinkedIn, currently maintained by Confluent
	4. Resolved the issue with lazy data communication between sender and reciever
	5. Producer is the entity which publishes messages and Consumer is entity who is subscriber of message
	6. https://aws.amazon.com/msk/what-is-kafka/
	7. Kafka Broker
		* Kafka has Broker with one or more servers in a cluster that holds multiple topics
		* Brokers in a cluster can be identified by integer id only
		* Connection with any Broker means connection with entire cluster
		* One broker does not have all topics but it knows about other brokers
	8. Topic Replication
		- one broker partition is leader and rest replications are followers
		- followers synchronize data but only leader replies to client requests
		- these replicas are known as ISR  ( in-sync-replicas ) 
		- Kafka offers multiple ISR
		- Leader handles r/w for partitions
		- the leader and followers are decided by the Zookeeper
	9. Kafka Setup
		- sudo apt-get install zookeeperd
		- sudo adduser kafka
		- sudo adduser kafka sudo
		- su -l kafka
		- sudo cp /home/ubuntu/kafka_2.13-2.8.2.tgz /home/kafka/
		- mkdir kafka
		- tar -xvzf ~/kafka.tgz --strip 1
		- nano ~/kafka/config/server.properties
			+ delete.topic.enable = true
			+ log.dirs=/home/kafka/logs
		- sudo nano /etc/systemd/system/zookeeper.service
			```
				[Unit]
				Requires=network.target remote-fs.target
				After=network.target remote-fs.target
				[Service]
				Type=simple
				User=kafka
				ExecStart=/home/kafka/kafka/bin/zookeeper-server-start.sh
				/home/kafka/kafka/config/zookeeper.properties
				ExecStop=/home/kafka/kafka/bin/zookeeper-server-stop.sh
				Restart=on-abnormal
				[Install]
				WantedBy=multi-user.target
			```
		- sudo nano /etc/systemd/system/kafka.service
			```
				[Unit]
				Requires=zookeeper.service
				After=zookeeper.service
				[Service]
				Type=simple
				User=kafka
				ExecStart=/bin/sh -c '/home/kafka/kafka/bin/kafka-server-start.sh
				/home/kafka/kafka/config/server.properties > /home/kafka/kafka/kafka.log 2>&1'
				ExecStop=/home/kafka/kafka/bin/kafka-server-stop.sh
				Restart=on-abnormal
				[Install]
				WantedBy=multi-user.target
			```
		- sudo systemctl start kafka
		- sudo systemctl status kafka
	10. Test kafka installation
		* We will need producer and consumer
			```
			~/kafka/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic MyKafkaTopic 
			```
		* 

# Links:
1. https://www.learndatasci.com/glossary/binary-classification/
2. https://github.com/ChetanKnowIt/Pima-Indians-Diabetes-Dataset/blob/master/Pima%20Indians%20Diabetes%20Dataset.ipynb
3. https://towardsdatascience.com/top-10-binary-classification-algorithms-a-beginners-guide-feeacbd7a3e2
4. https://www.mygreatlearning.com/blog/label-encoding-in-python/
5. https://machinelearningmastery.com/feature-selection-with-real-and-categorical-data/
6. https://machinelearningmastery.com/information-gain-and-mutual-information/
7. https://www.simplilearn.com/tutorials/machine-learning-tutorial/feature-selection-in-machine-learning
8. cross validation https://www.mygreatlearning.com/blog/cross-validation/
9. https://www.analyticsvidhya.com/blog/2021/08/decision-tree-algorithm/
10. https://datatofish.com/confusion-matrix-python/
11. https://youtu.be/jnxqHcObNK4
12. https://spark.apache.org/docs/latest/api/python/user_guide/pandas_on_spark/best_practices.html
13. https://hevodata.com/learn/spark-streaming-and-kafka-integration/
14. 
# Dataset:
1. https://archive.ics.uci.edu/ml/datasets/banknote+authentication
2. 