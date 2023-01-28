# Promotion Counting - Jack Manning

#Input handling
import sys
sys.stdin = open("promote.in", "r")
sys.stdout = open("promote.out", "a")


#Using a space as my delimiter plitting the input lines into arrays of their values
bronze = [int(a) for a in input().split(" ")]
silver = [int(b) for b in input().split(" ")]
gold = [int(c) for c in input().split(" ")]
platinum = [int(d) for d in input().split(" ")]

#Starting with my endpoint, platinum, tracking promotions by how many people ended plat vs how many started plat
platinum_promotions = platinum[1] - platinum[0]

#Armed with that knowledge finding the difference in gold while factoring in how many moved on to plat
gold_promotions = platinum_promotions + gold[1] - gold[0]

#Following the same format to find the silver promotions
silver_promotions = gold_promotions + silver[1] - silver[0]


#Desired output of 3 lines, bronze to silver promotions, silver to 
print(silver_promotions)
print(gold_promotions)
print(platinum_promotions)