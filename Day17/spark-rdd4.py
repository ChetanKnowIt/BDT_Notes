import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[4]")\
										.appName('ubuntu')\
										.getOrCreate()

# Spark Context Object
sc = spark.sparkContext

# Create RDD with wholeTextFiles
rdd = sc.wholeTextFiles('/home/ubuntu/datasets/*')
print(rdd.collect())