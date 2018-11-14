// ============================================================= //
// Citation: https://www.w3schools.com/js/js_function_closures.asp
// ============================================================= //

// SNIPPET #1
// // Basic Counter that uses closure to increment `counter` from a nested function:
// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function add() {
//     counter += 1;
// }

// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(counter)

// // The counter should now be 3

// SNIPPET #2 There is a problem with the solution above: Any code on the page
// can change the counter, without calling add(). The counter should be local to
// the add() function, to prevent other code from changing it: 

// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function add() {
//     var counter = 0; 
//     counter += 1;
// }

// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(counter)

// //The counter should now be 3. But it is 0

// SNIPPET #3 It did not work because we display the global counter instead of
// the local counter. We can remove the global counter and access the local
// counter by letting the function return it:

// // Function to increment counter
// function add() {
//   var counter = 0; 
//   counter += 1;
//   return counter;
// }

// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())

// //The counter should now be 3. But it is 1.

// It did not work because we reset the local counter every time we call the function.

// SNIPPET #4 This could have solved the counter dilemma, if we could reach the
// plus() function from the outside. We also need to find a way to execute
// counter = 0 only once. We need a closure.
// As it is, counter is reset to 0 each time add() is invoked.

function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();    
  return counter; 
}

// Call add() 3 times
console.log(add())
console.log(add())
console.log(add())

// // SNIPPET #5
// var add = (function () {
//   var counter = 0;
//   return function () {counter += 1; return counter}
// })();


// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())

// // the counter is now 3
