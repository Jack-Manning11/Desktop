#Jack Manning - Cow Gymnastics

with open('gymnastics.in') as fileIn:
    k,n = map(int, fileIn.readline().strip().split(' '))
    d = [fileIn.readline().strip().split(' ') for i in range(k)]

#Handles converting 2d array of strings to 2d array of ints (bad I hate this)
data = d
for i in range(k):
    data[i] = [int(s) for s in d[i]]

#setting end variable
pairs = 0

#utility function, takes in two cows and returns the amount of times cow A beats cow B
def compare(a,b):
    count = 0 #initialize count var
    for s in range(k): #for each session in number of sessions
        aRank = 0 #Cow A's rank
        bRank = 0 #Cow B's rank
        for i in range(n):
            if (data[s][i] == a):
                aRank = i
            if (data[s][i] == b):
                bRank = i
        if(aRank < bRank):
            count += 1
    return count

for i in range(k):
    for j in range(n):
        if(compare(i,j) == k):
            pairs += 1

print(pairs, file=open('gymnastics.out'))
