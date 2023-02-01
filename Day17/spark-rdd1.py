import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[12]")\
										.appName('ubuntu')\
										.getOrCreate()

# Spark Context Object
sc = spark.sparkContext

# Create RDD
rdd = sc.range(1, 5)
print(rdd.collect())