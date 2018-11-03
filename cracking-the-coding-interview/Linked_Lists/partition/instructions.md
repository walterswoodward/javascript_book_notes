# Instructions

Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLE

Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

* NOTE: I have also written out a solution for a variation on this problem where the output list must be ordered [values < partition] -> [values === partition ] -> [values > partition]


# Considerations

1. All that is asked is that the nodes "less than x" are positioned "before all nodes great than OR equal to x", so we only need to concern ourselves with changing the order of those node values that are LESS than the partition. So to be more explicit, the question could be phrased like this:
  1. Write code that reorders an existing set of LinkedList nodes such that all nodes at the front of the LinkedList are less than the partition AND all the nodes that are greater than or equal to come afterwards. The node values that are equal to the given partition DO NOT need to be reordered.
2. The example given is a bit misleading because if you were to simply traverse the list, construct a new LinkedList of all the lesser values, and then append it to the remaining values, you would expect the output to be this: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10.