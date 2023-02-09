n = int(input())
flowers = list(map(int, input().split()))

valid_photos = 0
for i in range(n):
	for j in range(i, n):
		# find the average petal # in the range i - j
		avg_petals = sum(flowers[i:j + 1]) / (j - i + 1)

		for index in range(i, j + 1):
			if flowers[index] == avg_petals:
				# we found an average flower
				valid_photos += 1
				break

print(valid_photos)