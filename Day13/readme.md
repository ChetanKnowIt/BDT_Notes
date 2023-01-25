# Notes

1. Hive
	1. Create Table with all essential delimiters to improve readability in Java and other languages
		```
		create table student
		(roll int, name string, marks float)
		row format delimited
		fields terminated by ',' 
		lines terminated by '\n'
		stored as textfile;
		```  
	2. Insert data
	```
		insert into student values
		(1,"Shreya",69),(2,"Shraddha",96);
	```
	3. Load Data
 	```
 		load data local inpath 'student.txt' into table student;
 	```
 			student.txt is stored on home
 			if _local_ not mentioned, student.txt will be searched on HDFS

 	4. Move Data from local to HDFS and then to Table
 	```
 		hadoop fs -put student.txt /input1 

 		load data inpath '/input1/student.txt' into table student;
 	```
 	5. Query to find student who have First Class
 	```
 		select name from student where marks >= 60;
 	```
 	6. Print info about student who have roll number 2,5,8
 	```
 		select * from student where roll in (1232,1235,1238);
 	```
 	7. Average marks from roll number 3,4,5,6
 	```
 		SELECT id, avg(marks) FROM student GROUP BY id HAVING id in (1233,1234,1235,1236)
 	```
 	8. Alter table is also possible
 	```
 		ALTER TABLE name RENAME TO new_name
 		ALTER TABLE name CHANGE column_name new_name new_type
 		alter table student change roll id int;
 	```
 	9. Operators in Hive
 		1. Add operator example
 		```
 			select id+100, name, marks from student;
 		```
 		2. create temp table for first class students
 		```
 			create table temp as select * from student where marks >= 60;
 		```
 		3. add 55-60 marks student to temp
 		```
 			insert into temp select * from student where marks>=40 and marks <=60;
 		```
 	10. Create another temp table with 
 		1. table with 2 extra column cgpa and firstclass and rest column same as student
 		```
 		create table student1 as select id, name, marks, round(marks/10+1.5,2) as cgpa, marks>=60 as firstclass from student;
 		```
 		2. print the name of student who are having first class in python
 			1. so we need a table with 5 columns and has space separator  
 				```
 				create table student2 (roll int, name string, marks float, cgpa double, firstclass boolean) row format delimited fields terminated by ' ' lines terminated by '\n';

 				insert into student2 select id, name, marks, round(marks/10+1.5,2) as cgpa, marks>=60 as firstclass from student;

 				``` 	
 			2. Run command
 				```
 			 	hadoop jar hadoop-streaming-3.3.4.jar -file mapper.py -mapper mapper.py -input /user/hive/warehouse/college.db/student2 -output /firstclass_python_mapper
 			 	```