import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[4]")\
										.appName('ubuntu')\
										.getOrCreate()

# Spark Context Object
sc = spark.sparkContext

# Create RDD with parallelize(works with any data structure)
data = list(range(1,13))
rdd = sc.parallelize(data)
print(rdd.collect())