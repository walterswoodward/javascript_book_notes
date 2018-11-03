const firstSolution = (str1, str2) => {
  // Edge Cases:
  if (str1 === str2) {
    return true;
  } else if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // Replacement
  if (str1.length === str2.length) {
    let dontMatch = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        dontMatch++;
      }
      if (dontMatch > 1) {
        return false;
      }
    }
    return true;
    // Insertion/Removal
  } else {
    // Find out which string is longer and which is shorter
    let long = str1.length > str2.length ? str1 : str2;
    let short = str1.length < str2.length ? str1 : str2;
    // Iterate over the longer string
    for (let i = 0; i < long.length; i++) {
      // Compare each letter until you find where the insertion/removal was made
      if (long[i] !== short[i]) {
        // If only a single insertion/removal took place, then slicing away this
        // letter should result in long and short being exactly equivalent
        long = long.slice(0, i) + long.slice(i + 1);
        if (long === short) {
          return true;
        }
        return false;
      }
    }
  }
};

// console.log(firstSolution("pale", "pale"))
// console.log(firstSolution("pale", "bale"))
// console.log(firstSolution("pae", "pale"))

// MERGING TWO - single loop solution:
const mergedSolution = (str1, str2) => {
  // Don't forget Edge Cases!
  let long = str1.length > str2.length ? str1 : str2;
  let short = long === str2 ? str1 : str2;
  
  let index1 = 0;
  let index2 = 0;

  let foundDifference = false;
  while (index2 < long.length) {

    if (short[index1] !== long[index2]) {
      if (foundDifference) return false;
      foundDifference = true;
      if (long.length === short.length) {
        index1++;
      }
    } else {
      index1++;
    }
    index2++;
  }
  return true;
};

// // Equal
// console.log(mergedSolution("pale", "pale"))
// // Replacement
// console.log(mergedSolution("pale", "bale")) // true
// console.log(mergedSolution("pale", "balt")) // false
// // Insert/Remove
// console.log(mergedSolution("patleg", "pale")); // false
// console.log(mergedSolution("pa", "pale")); // false
// console.log(mergedSolution("palet", "pale")); // true 
// console.log(mergedSolution("pale", "spale")); // true
