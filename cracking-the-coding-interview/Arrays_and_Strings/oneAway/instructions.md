# Instructions

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple => true
pales, pale => true
pale, bale => true
pale, bae => false

# Considerations

1. Equal Edge Case: If the two input strings are equal, then you can return true
2. If the strings are of equal length, then return true only if there is no more than 1 different index where the letters are different.
   * If using ASCII values, then adding the difference between the sum of ASCII values of each string should be no more than (z - a = 122 - 96 = 26)
3. If the strings are different lengths, then if all the letters in the shorter one are also be present in the longer one, then return true.
4. If 2 and 3 are false, then return false
5. We'll assume that the characters are lower-case ASCII letters.