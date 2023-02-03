#Jack Manning - Milk Pails

fileIn = open('pails.in', 'r') #Reader
fileOut = open('pails.out', 'w') #Writer

#Using map to get access to our three bits of input data
#x is small bucket, y is medium bucket, and m is the large bucket
x,y,m = map(int, fileIn.readline().strip().split(' '))

#initialize my ending variable for the greatest amount of milk that can be collected
total = 0

#2D loop to ensure I test every possible combination of X & Y
for i in range(m):
    for j in range(m):
        curr = (x * i) + (y * j)
        if curr <= m:
            total = max(total,curr)

print(total, file=fileOut)