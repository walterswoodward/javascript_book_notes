const solutions = (str, trueLength) => {
  // Slice off any spaces after the true length of the string
  if (trueLength < str.length) str = str.slice(0, trueLength);
  // Replace all remaining spaces with "%20"
  for (let i = trueLength - 1; i >= 0; i--) {
    if (str[i] == " ") {
      str = str.slice(0, i) + "%20" + str.slice(i + 1);
    }
  }
  return str;
};

console.log(solutions("Mr John Smith    ", 13));
