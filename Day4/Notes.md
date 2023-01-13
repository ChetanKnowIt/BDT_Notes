# NOTES
=======

## 1. HDFS COMMANDS

 * simple file

		hadoop fs -copyFromLocal che557.txt /mydata

 * adding file larger than 128MB breaks into multiple blocks

		hadoop fs -put hadoop-3.3.4.tar.gz /mydata

 * listing files in hadoop file system

 		hadoop fs -ls /

 * files and subfolders can be listed using

 		hadoop fs -ls -R /mydata

 * number of bytes used or spent from the disk

 		hadoop fs -du /mydata 		

 		hadoop fs -du -h /mydata 		

 		hadoop fs -du -s /mydata 		

 		DU OPTIONS	DESCRIPTION
-s	Show the size of each individual file that matches the pattern, show the total (summary) size.
-h	Used to format the sizes of the files in a human-readable manner rather than the number of bytes.
-v	Display the names of columns as a header line.
-x	Exclude snapshots from the result calculation

 * move file from local to hadoop file system

 		hadoop fs -moveFromLocal chetan.txt /mydata/hello

 * move file from one directory to another inside hadoop file system(src and dstn both hdfs)

 		hadoop fs -mv /mydata/che557.txt /mydata/hello

 * copy file from one dir to another(both src and destn in same hadoop file system) 		

 		hadoop fs -cp /mydata/hello/che557.txt /mydata/

 		hadoop fs -cp /mydata/hello/che557.txt /


 		scp, sftp demo


 * remove file from hdfs

 		hadoop fs -rm /mydata/hadoop-3.3.4.tar.gz 		

 * remove directory or multiple files along with the directory

 		hadoop fs -rm -r /mydata/hello

 * get file from hdfs to local directory

 		hadoop fs -get /mydata/chetan.txt   		

 * to cat contents

 		hadoop fs -cat /mydata/chetan.txt

 * to show head and tail content
		
		hadoop fs -tail /mydata/chetan.txt
		hadoop fs -head /mydata/chetan.txt

 * set replication 

 		hadoop fs -setrep 3 /mydata/chetan.txt

 * touchz to create a file without any contents inside hdfs

 		hadoop fs -touchz /demo.txt


 * for stats
        
        hadoop fs -stat %o /mydata/chetan.txt   134217728

        hadoop fs -stat %b /mydata/chetan.txt   40

        hadoop fs -stat %n /mydata/chetan.txt   chetan.txt

        hadoop fs -stat %Y /mydata/chetan.txt   1673525127192

        hadoop fs -stat %y /mydata/chetan.txt   2023-01-12 12:05:27

* for help

        hadoop fs -help ls

        hadoop fs -help stat

 * for file info

        hadoop fs -stat %A /mydata/chetan.txt  rw-r--r--

        hadoop fs -stat %F /mydata/chetan.txt  regular file

        hadoop fs -stat %F /mydata/            directory

        hadoop fs -stat %g /mydata/             supergroup

        hadoop fs -stat %u /mydata/             ubuntu

        hadoop fs -stat %X /mydata/chetan.txt   1673584918911

        hadoop fs -stat %x /mydata/chetan.txt   2023-01-13 04:41:58

 * linux script to run any program 

        #!/bin/bash
        java HelloWorld

 * change owner

        hadoop fs -chown root /mydata/chetan.txt

 * change group and owner in same command

        hadoop fs -chown root:root /mydata/chetan.txt        
 
 * only change group

         hadoop fs -chgrp supergroup /mydata/chetan.txt
 * 


## Map Reduce

1.           


