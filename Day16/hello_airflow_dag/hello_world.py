from datetime import datetime
from airflow import DAG
from airflow.operators.dummy_operator import DummyOperator
from airflow.operators.python_operator import PythonOperator

def print_hello():
	return "Hello world from first Airflow DAG!"

dag = DAG('hello_world', description='Hello World DAG',
					schedule_interval='@*****',
					start_date=datetime(2023,1,31))

hello_operator = PythonOperator(task_id='hello_task',
																python_callable=print_hello, dag= dag)					

hello_operator																