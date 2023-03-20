# This solution does TLE on the USACO website on one test case because python is slow.
from collections import deque

with open("perimeter.in") as r:
	t = r.readline
	n = int(t())
	ice = []
	visited = [[False] * n for _ in range(n)]

	for _ in range(n):
		ice.append(list(t()))

max_area = 0
min_peri = float("inf")

# possible directions
DIRECTIONS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

# check if out of bounds
def out(a, b, l):
	if a < 0 or b < 0 or a >= l or b >= l:
		return True
	return False


def area_and_perimeter(x, y):
	area, peri = 1, 0

	q = deque()
	q.append((x, y))
	visited[x][y] = True

	while q:
		x, y = q.pop()

		for dx, dy in DIRECTIONS:
			nx, ny = x + dx, y + dy
			if out(nx, ny, n) or ice[nx][ny] == ".":
				peri += 1
			else:
				# check if already visited
				if not visited[nx][ny]:
					area += 1
					q.appendleft((nx, ny))
					visited[nx][ny] = True
	return area, peri


for i in range(n):
	for j in range(n):
		if ice[i][j] == "#" and not visited[i][j]:
			area, peri = area_and_perimeter(i, j)

			if area > max_area:
				max_area, min_peri = area, peri
			elif area == max_area:
				if min_peri > peri:
					max_area, min_peri = area, peri

print(max_area, min_peri, file=open("perimeter.out", "w"))