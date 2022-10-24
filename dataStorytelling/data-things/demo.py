import csv
wordList=[]
categoryList=[]

with open("titles&category.csv", newline='') as csvfile:
    csvreader = csv.DictReader(csvfile)
    for row in csvreader:
        tempArr = row['title'].lower().split()
        category = row['category']
        for item in tempArr:
           wordList.append(item)
           categoryList.append(category)
           
with open('output.csv','w') as file:
    writer = csv.writer(file)
    for x in range(len(wordList)):
        writer.writerow([wordList[x], categoryList[x]])


