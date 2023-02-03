from pyspark.sql import SparkSession
from py4j.java_gateway import JavaGateway

spark = SparkSession.builder.master('local')\
										.appName('hivedb')\
										.enableHiveSupport()\
										.getOrCreate()

sc = spark.sparkContext
scanner = sc._gateway.jvm.java.util.Scanner
sys_in = getattr(sc._gateway.jvm.java.lang.System,'in')

print("Enter lower marks:",end=" ")
lower = int(scanner(sys_in).nextLine())
print("Enter higher marks:",end=" ")
higher= int(scanner(sys_in).nextLine())
query = '''select * from student where marks between %d and %d''' %(lower, higher)

spark.sql("use college")
spark.sql(query).show()
