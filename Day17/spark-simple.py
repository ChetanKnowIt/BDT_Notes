import pyspark
from pyspark.sql import SparkSession

spark = SparkSession.builder.master("local[1]")\
										.appName('ubuntu')\
										.getOrCreate()

print('Spark Version: ', spark.version)										

#sc = spark.SparkContext
#print('Context: ', sc)

df = spark.createDataFrame([("Scala", 25000),("Spark", 35000),("PHP", 21000)])
print(df.show())