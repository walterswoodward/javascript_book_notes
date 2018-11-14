// // Example of Code in Need of an IIFE
// function buggy() {
//   for ( var i = 0; i < 5; i++ ) {
//     console.log("Delay: ", i*100);
//     setTimeout(function() {
//       console.log("i: ", i)
//     }, i * 100 );
//   }
// }
// console.log(buggy())

// Updated/"Fixed" Code
function fixed() {
  let output;
  for ( var i = 0; i < 5; i++ ) {
    console.log("Delay: ", i*100);
    (function(safe_i) {
      setTimeout(function() {
        console.log("i:", safe_i)
        output = safe_i
      }, i * 100 );
    }) (i);
    // console.log(output) // Get output here by commenting out setTimeout wrapper
  }
  console.log(output)

}

console.log(fixed())




