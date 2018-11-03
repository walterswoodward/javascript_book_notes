# Instructions

Implement an algorithm to find the kth to last element of a singly linked list.

# Considerations:

1. Is the desired solution a recursive (terse, less optimal) or non-recursive (clear but more verbose) method?
2. In order to solve this problem you need to know what is meant by "kth to last element". Initially I read it as just an algorithm for finding nodes at positions from k to the end of the LinkedList but this is NOT what is meant. "kth to last element" means that when you input k = 1, the method will return the last node in the LL. When you input k = 2, the method will return the 2nd to last node in the LL etc.