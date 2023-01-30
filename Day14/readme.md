# Notes

### HIVE COMMANDS

1. with numReduceTasks
	```
		$ hadoop jar hadoop-streaming-3.3.4.jar -file mapper.py -mapper mapper.py -input /user/hive/warehouse/college.db/student2 -output /firstclass_python_mapper -numReduceTasks 0
	``` 	
	1. the execution is faster since we removed the reducer part
	2. and more importantly, no sorting task will be scheduled as reducer is non-existant
	3. we will get the same output records but not sorted

2. logical commands
3. built in functions
	```
		hive> select floor(marks) from student2;
		hive> select ceil(marks) from student2;
		hive> select rand();
		hive> select concat(name, name) from student2;
		hive> select concat(name, '@',roll, marks) from student2;
		OK
		Sanjay@123342.53
		Kiran@123426.26
		Simran@123583.45
		Sanjay@123342.53
		Kiran@123426.26
		Simran@123583.45
		Laxman@123667.73
		Shraddha@123799.99
		Shrutika@123878.36
		Vaibhav@123989.52
		Shakti@124067.57
		Vidhi@124184.41
		Kaustub@124289.62
		Prince@124399.37
		hive> select upper(name) from student2;
		hive> select ucase(name) from student2;
		hive> select lower(name) from student2;
		hive> select lcase(name) from student2;
		hive> select trim(name) from Student2;
		hive> select count(roll) from student2;
		hive> select avg(marks) from student2;
		hive> select round(sum(marks),5) from student2;
	```
4. views 
	```
		hive> create view myview as select name, marks from student2 where marks >= 70;

	```
5. indexing
	```
		hive> CREATE INDEX inedx_salary ON TABLE employee(salary)
AS ‘org.apache.hadoop.hive.ql.index.compact.CompactIndexHandler’;
	```

6. joins
	1. we created a new database student3.txt
		```
		create table student3
		(roll int, class string, gender string)
		row format delimited
		fields terminated by ','
		lines terminated by '\n'
		stored as textfile;
		```
	2. then we load data from student3.txt where file is kept in home directory
		```
		load data local inpath 'student3.txt' into table student3;
		```
	3. write a join query
		```
		select a.roll, a.name, a.marks, b.class, b.gender from student2 a join student3 b on a.roll=b.roll;
		```
	4. write a left join query
		```
		select a.roll, a.name, a.marks, b.class, b.gender from student2 a left outer join student3 b on a.roll=b.roll;
		```

7. subquery
	1. example
		```
		select name, marks from student2 where roll in (select roll from student3 where class = 'SY');

		```
	2. find avg marks of f and m gender
		```
		X select marks, avg(marks) from student2 where roll in (select roll from student3 group by gender);

			select b.gender, avg(a.marks) from student2 a join student3 b on a.roll=b.roll group by b.gender;



		```
8. 