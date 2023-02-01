import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[1]")\
										.appName('ubuntu')\
										.getOrCreate()

print('Spark Version: ', spark.version)										

# Spark Context Object
print(spark.sparkContext)
sc = spark.sparkContext
print("Spark App Name: ", spark.sparkContext.appName)
print("Spark App Name: ", sc.appName)
