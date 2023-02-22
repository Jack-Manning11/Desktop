import sys

sys.stdin = open('cowqueue.in')

n = int(input())

cows = []
for i in range(n):
	cows.append(list(map(int, input().split())))

cows.sort()


currTime = 0
for c in cows:
	# this cow was already waiting, add duration to current time.
	if currTime > c[0]:
		currTime += c[1]
	else:
		# the last cow finished before this one arrived,
		# so set the current time to when this cow finishes.
		currTime = c[0] + c[1]

#print(currTime)