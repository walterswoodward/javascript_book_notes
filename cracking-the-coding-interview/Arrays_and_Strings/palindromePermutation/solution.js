// Tally, %2 Test Method:
const tallyMod2 = (string) => {

// Create copy of string and convert all letters to lower case
let str = string.split("").slice(0).map(letter=> letter.toLowerCase())

// Edge Case: Return false if str contains any characters that are not
// lower-case ASCII letters
const lettersOnly = str.filter(item=> item.charCodeAt() >= 97 && item.charCodeAt()<= 122)
if (lettersOnly.length !== str.length){
  return false
}

// Create tally array of all letters in string
let tally = []
for (let i = 0 ; i < str.length; i++){
  if (tally[str[i]] === undefined){
    tally[str[i]] = 1
  } else {
    tally[str[i]]++
  }
}

// SLOWER
// If more than one letter occurs an odd number of times, then this is not a
// palindrome permutation.
// const filtTally = Object.values(tally).filter(item=> item%2!==0)
// if (filtTally.length > 1){
//   return false
// } return true

// FASTER
// This will be a little faster since it stops iterating as soon as more than
// one letter is found occuring an odd number of times, whereas the method above
// filters through ALL values every time.
let odds = 0
let tallyValues = Object.values(tally)
for (let k = 0; k < tallyValues.length; k++){
  if (tallyValues[k]%2 === 1){
    odds++
  } 
  if (odds > 1){
    return false
  }
}
return true
}
// console.log(tallyMod2("DabwAcbaAAAWABBBDBA")) // should be: true
// console.log(tallyMod2("abc")) // should be: false


// Binary Method: VERY FAST
const bitVector = (string)=> {
// Edge Case Stuff:
let str = string.split("").slice(0).map(letter=> letter.toLowerCase())
const lettersOnly = str.filter(item=> item.charCodeAt() >= 97 && item.charCodeAt()<= 122)
if (lettersOnly.length !== str.length){
  return false
}
// Create tally
let tally = []
for (let i = 0 ; i < str.length; i++){
  if (tally[str[i]] === undefined){
    tally[str[i]] = 1
  } else {
    tally[str[i]] === 1? tally[str[i]]= 0: tally[str[i]]=1;
  }
}
let tallyValue = parseInt(Object.values(tally).join(""),2)

// Here is the Binary Magic: 
// 1. Subtracting one from a binary number with only a single one will always
//    return a binary number with a series of 0's followed by a series of 1's:
//    00010000 - 1 = 00001111 
//    0000000100000 = 0000000011111
// 2. `&` Returns a one in each bit position if bits of both operands are ones:
//    00010000 & 00001111 = 0 
// 3. So if the following evaluates to 0, then we know that there is only one or
//    zero letters with an odd number of occurrences
if (tallyValue & (tallyValue - 1) === 0){
  return true
}
return false
}

// console.log(bitVector("DabwAcbaAAAWABBBDBA")) // should be: true
// console.log(bitVector("abc")) // should be: false