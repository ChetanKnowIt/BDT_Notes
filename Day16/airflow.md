# AIRFLOW NOTES


### 1. Installation

1. from apache site:
			
	```sudo pip3 install "apache-airflow[celery]==2.5.1" --constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.5.1/constraints-3.7.txt"```
			
2. after error:
			
	```sudo apt install python3-testresources```


3. setup:
	```
	airflow db init

	airflow users create \
	    --username admin \
	    --firstname Peter \
	    --lastname Parker \
	    --role Admin \
	    --email spiderman@superhero.org

	airflow webserver --port 8080

	airflow scheduler

	```
4. 
	
### 2. Links
1. file locks in linux https://www.baeldung.com/linux/file-locking
2. pros and cons https://www.altexsoft.com/blog/apache-airflow-pros-cons/
3. tutorial https://mindmajix.com/apache-airflow-tutorial
4. operators in airflow https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/operators.html
5. basics https://docs.astronomer.io/learn/category/basics
6. 


### 3. Fundamentals
1. Directed: if you have serveral tasks that further have dependencies, each task has upstream and downstream task
2. Acyclic: tasks cannot create self-references
3. Graph: tasks are generally in a logical structure with precisely defined relationships and processes in association with other tasks