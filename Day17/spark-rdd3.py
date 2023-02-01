import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[4]")\
										.appName('ubuntu')\
										.getOrCreate()

# Spark Context Object
sc = spark.sparkContext

# Create RDD with textFile
rdd = sc.textFile('/home/ubuntu/fruits.txt,/home/ubuntu/fruits1.txt')
print(rdd.collect())