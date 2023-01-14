import sys
fruits = [fruit for line in sys.stdin for fruit in line.strip().split()]
for fruit in fruits:
    print(fruit, 1)

