#Ashley Paulson Speeding Ticket USACO BRONZE problem Feb 5
import sys

sys.stdin = open('speeds.in', 'r')
# help borrowed from Swammer on youtube

#read data file
n, m = list(map(int, input().split())) #assign values to n and m
speed_lim = [list(map(int,input().split())) for i in range(n)] #create the values that pertain to the speed limit
bessies_speed = [list(map(int,input().split())) for i in range(m)]# create the values that pertain to bessues speed
total = 0 #set the total to 0

speeds = [] #create the lists we can later append
bessie = [] 

for i in speeds:
    for j in range(i[0]):
        speeds.append(i[1])

for i in bessies_speed:
    for j in range(i[0]):
        bessie.append(i[1])
'''
for i in range(100):
    if speeds[i] < bessie[i] and bessie[i] - speeds[i] > total:
        total = bessie[i] - speeds[i]
'''
print(speeds)