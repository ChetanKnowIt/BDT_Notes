with open('fruits.txt', 'r') as f:
    lines = f.readlines()
    fruits = [fruit for line in lines for fruit in line.strip().split()]
    for fruit in fruits:
        print(fruit, 1)
