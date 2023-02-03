#Jack Manning - Diamond Collector
with open('diamond.in') as fileIn:
    n,k = map(int, fileIn.readline().strip().split(' ')) #Read in first line for N & K
    diamonds = [int(fileIn.readline()) for i in range(n)] #Read all diamonds into an array

#Set ending variable
maxDiamonds = 0

#2D array to make sure I test every possible combination
for i in diamonds:
    temp = 0
    for j in diamonds:
        if i <= j <= i + k: #test every diamond vs current diamond if in range of K
            temp += 1
    maxDiamonds = max(maxDiamonds, temp)

print(maxDiamonds, file=open('diamond.out', 'w'))