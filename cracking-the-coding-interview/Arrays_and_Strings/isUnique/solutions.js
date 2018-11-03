// Brute Force Iterative Method (doesn't use additional data structures)
// Time Complexity: O(n**2) - SLOW - DON'T DO IT LIKE THIS
const brute = str => {
  if (str.length === 0) {
    return true;
  } else if (str.length > 256) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
    return true;
  }
};

// Sorting Method:
// 1. Time Complexity: O(N) where N is the length of the input
// 2. Space Complexity: O(1)
const sortMethod = (str) => {
  // Don't forget your Edge Cases!
  let sorted = str.split("").sort()
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]){
      return false
    }
  }
}

// Object Method: 
// 1. Time Complexity: O(N) where N is the length of the input
// string OR if you take into account the fixed character set of 256 ASCII
// characters, you could argue the time complexity is O(1)
// 2. Space Complexity: O(1) -- non-recursive, calls do not exist on callstack simultaneously
const objectMethod = str => {
  // Assuming extended ASCII characters, returns false if the length of str is
  // greater than the number of ASCII characters (256)
  if (str.length > 256) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] !== undefined) {
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
};

// Boolean Array Method:
// Time Complexity: O(N) where N is the length of the input string
const boolArray = str => {
  if (str.length > 256) {
    return false;
  }
  const boolArr = [];
  for (let i = 0; i < str.length; i++) {
    if (boolArr[str[i].charCodeAt()] === true) {
      return false;
    }
    boolArr[str[i].charCodeAt()] = true;
  }
};
