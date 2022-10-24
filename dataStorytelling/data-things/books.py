import csv
list=[]
tempArr=""

class uniqueWords:
    def __init__(self, word):
        self.word = word
        self.count = 1

with open("titles.csv", newline='') as csvfile:
    csvreader = csv.DictReader(csvfile)
    for row in csvreader:
        tempArr = row['title'].lower().split()
        for item in tempArr:
            present = False
            for thing in list:
                if thing.word == item:
                    thing.count += 1
                    present = True
            if present == False:
                list.append(uniqueWords(item))
        
with open('output.csv','w') as file:
    writer = csv.writer(file)
    for item in list:
        writer.writerow(item.count)
