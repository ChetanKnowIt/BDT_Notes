import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[4]")\
										.appName('ubuntu')\
										.getOrCreate()

# Spark Context Object
sc = spark.sparkContext

# Create RDD with textFile
data = list(range(1,13))
rdd = sc.parallelize(data)
print(rdd.collect())
# Print number of partitions
print('Number of partitions: ', rdd.getNumPartitions())
rdd2 = rdd.repartition(2)
print('Number of partitions: ', rdd2.getNumPartitions())