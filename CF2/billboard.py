file_in = open('billboard.in', 'r') #Reader
file_out = open('billboard.out', 'w') #Writer

#Input Handling
lawnBillboard = file_in.readline().strip().split(' ')
bessBillboard = file_in.readline().strip().split(' ')

#Variable declaration
x1 = int(lawnBillboard[0])
y1 = int(lawnBillboard[1])
x2 = int(lawnBillboard[2])
y2 = int(lawnBillboard[3])

x3 = int(bessBillboard[0])
y3 = int(bessBillboard[1])
x4 = int(bessBillboard[2])
y4 = int(bessBillboard[3])

#Case detection
topLeft = x3 <= x1 and y4 >= y2
topRight = y4 >= y2 and x4 >= x2
botRight = x4 >= x2 and y3 <= y1
botLeft = y3 <= y1 and x3 <= x1

#Case Handling
corner_num = sum([topLeft, topRight, botRight, botLeft])
#Case 1 - same exact location
if botLeft == True and topRight == True:
    file_out.write(str(0))
#Case 2 - just one corner
elif corner_num in [0,1]:
    file_out.write(str(abs(x2-x1) * abs(y2-y1)))
#Case 3 - to the right
elif botRight and topRight:
	file_out.write(str(abs(y2 - y1) * abs(x2 - x4)))
#Case 4 - to the left
elif botLeft and topLeft:
	file_out.write(str(abs(y2 - y1) * abs(x2 - x4)))
#Case 5 - up top
elif topRight and topLeft:
	file_out.write(str(abs(x2 - x1) * abs(y3 - y1)))
#Case 6 - down bottom
elif botRight and botLeft:
	file_out.write(str(abs(x2 - x1) * abs(y3 - y1)))
