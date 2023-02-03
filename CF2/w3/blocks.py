alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

def countFrequency(s):
    frequency = [0] * 26
    #Loop through each character in a string
    for c in s:
        count = 0
        for letter in alphabet:
            if c == letter:
                frequency[count] += 1
            count += 1
    return frequency

with open('blocks.in') as fileIn:
	n = int(fileIn.readline()) #Grab the number of lines from line 1
	words = [fileIn.readline().strip().split(' ') for x in range(n)] #split based on number of lines 

print(words)

#Create an empty array of 26 numbers
endFrequency = [0] * 26

#First loop handling both sides of the blocks
for firstWord, secondWord in words:
    frequency1 = countFrequency(firstWord)
    frequency2 = countFrequency(secondWord)
    for n in range(26):
        endFrequency[n] += max(frequency1[n], frequency2[n])

with open('blocks.out', 'w') as fileOut:
    for i in endFrequency:
        print(i,file=fileOut)
