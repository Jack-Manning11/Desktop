with open('maxcross.in') as read:
	n, k, b = map(int, read.readline().split())
	seen = [0] * (n + 1)
	left, right = 1, k
	value = 0
	
	for _ in range(b):
		seen[int(read.readline())] = 1

for i in range(left, right + 1):
	value += seen[i]
print(left)

possible = [value]
while n > right:
	value += seen[right + 1] - seen[left]
	left, right = left + 1, right + 1
	possible.append(value)
