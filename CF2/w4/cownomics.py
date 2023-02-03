#Jack Manning - Bovine Genomics

with open('cownomics.in') as fileIn:
    n,m = map(int, fileIn.readline().strip().split(' '))
    spottyCows = [fileIn.readline().strip() for i in range(n)] #First N lines are spotty cows
    plainCows = [fileIn.readline().strip() for i in range(n)] #Next N lines are plain cows

positions = 0

for i in range(m): #looping through every letter in genomes
    duplicate = False #temp variable
    for j in range(n): #2D loop that iterates through every genome to compare letters in the same position
        for k in range(n):
            if spottyCows[j][i] == plainCows[k][i]:
                duplicate = True
                break
    if duplicate == False:
        positions += 1

print(positions, file=open('cownomics.out', 'w'))