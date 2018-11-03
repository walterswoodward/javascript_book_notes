# Instructions

Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word of phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE

Input: Tact Coa
Output: True(permutations:"taco cat", "atco cta". etc.)

# Considerations

1. From the example we can assume that assessments are case insensitive.
2. A permutation is a rearrangement of LETTERS, so an edge case that compares the input string with one that filters out all non-letters will likely be necessary.
3. Since we are not limited to dictionary words, there is no need for a cross-check to confirm palindromes are in fact words.
4. For a string to be a palindrome permutatation, all letters must occur an even number of times. There can be ONE letter that occurs an odd number of times.