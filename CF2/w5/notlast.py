# Jack Manning
# Don't Be Last!

#
COW_NUM = 7

with open('notlast.in') as read:
	raw = {}
	for _ in range(int(read.readline())):
		name, amt = read.readline().split()
		amt = int(amt)
		if name not in raw:
			raw[name] = 0
		raw[name] += amt
    
cows = [(amt, name) for name, amt in raw.items()]
cows.sort()

#Set index variable
i = 0

if len(cows) == COW_NUM:
	while i < len(cows) and cows[i][0] == cows[0][0]:
		i += 1

written = open('notlast.out', 'w')
if (i < len(cows) and (i + 1 == len(cows) or cows[i][0] != cows[i + 1][0])):
	print(cows[i][1], file=written)
else:
	print('Tie', file=written)