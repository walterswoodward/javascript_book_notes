// Slow Iterative Solution -- No additional Datastructures used:
const slowComp = (str) => {
  let compressedStr = "";
  let countConsec = 0;
  for (let i = 0; i < str.length; i++){
    countConsec++;
    // If you reach the next value of i goes beyond the length of the string
    // OR the letter in the string is not the same as the current:
    // Append the current letter plus the count to the compressedStr
    if (i + 1 >= str.length || str[i] !== str[i+1]){
      compressedStr += "" + str[i] + countConsec;
      countConsec = 0
    }
  }
  // Ensures that if the compressed version is longer than the original, that
  // the original string will be returned
  return compressedStr.length < str.length? compressedStr: str;
}

console.log(slowComp("aabcccccaaa"))