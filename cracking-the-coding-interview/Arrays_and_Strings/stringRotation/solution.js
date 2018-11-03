const isSubString = (s1,s2) => {
  // Edge cases:
  if (s1.length !== s2.length){
    return false
  }
  // If the first letter of s1 is not a letter in s2, then return false
  if (s2.indexOf(s1[0]) === -1){
    return false
  } else {
    // Construction the rotation of s2 that begins with the first letter of s1
    let rotated = s2.slice(s2.indexOf(s1[0])) + s2.slice(0, s2.indexOf(s1[0]))
    // Compare
    if (rotated === s1){
      return true
    } return false
  }
}

console.log(isSubString("erbottlewat", "waterbottle"))