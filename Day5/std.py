import sys
fruits_list=[]
for x in sys.stdin:
    line = x.split()
    for fruit in line:
    	print(fruit, 1)
