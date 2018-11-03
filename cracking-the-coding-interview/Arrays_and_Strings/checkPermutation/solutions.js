// This solutions assume that the input strings are all composed of
// alphabetical letters with no spaces/symbols AND that case should be ignored.

// Basic Sort and Compare Method:
const sortCompare = (str1, str2) => {
  // Edge Case -- If lengths are different, then they cannot be permutations of one another
  if (str1.length !== str2.length){
    return false
  }
  const sortedStr1 = str1
    .split("")
    .map(s => s.toLowerCase())
    .sort()
    .join("");
  const sortedStr2 = str2
    .split("")
    .map(s => s.toLowerCase())
    .sort()
    .join("");
  if (sortedStr1 === sortedStr2) {
    return true;
  }
  return false;
};
// console.log(sortCompare("goD", "dOg"));
// console.log(sortCompare("gods", "dog"));

// ASCII Character Counter Method:
const characterCounterMethod = (str1, str2)=>{
  let CharCountTotal = 0
  // Adds all the character count values for each character in str1 to CharCountTotal
  str1.split("").map(s =>{CharCountTotal += Number(s.charCodeAt())})
  // Subtracts all the character count values for each character in str2 from CharCountTotal
  str2.split("").map(s =>{CharCountTotal -= Number(s.charCodeAt())})
  // If both strings contain the same letters, then CharCountTotal should equal 0
  if (CharCountTotal === 0){
    return true
  }
  return false
}
// console.log(characterCounterMethod("godcvbnabcqwerdefghi","dogabcdefghiqwcvbner"))






