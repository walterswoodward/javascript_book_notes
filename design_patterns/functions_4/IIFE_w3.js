// ============================================================= //
// Citation: https://www.w3schools.com/js/js_function_closures.asp
// ============================================================= //

// So we use IIFE in order to ensure that variables that don't NEED to be in the
// global scope aren't. This first snippet produces the output we want BUT it
// does it by declaring counter in the global scope, which will never be
// acceptable in production.

// // SNIPPET #1
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

// // SNIPPET #2 There is a problem with the solution above: Any code on the page
// // can change the counter, without calling add(). The counter should be local to
// // the add() function, to prevent other code from changing it:

// // Function to increment counter
// function add() {
//     var counter = 0;
//     counter += 1;
// }

// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())

// // We wanted to see counter = 3. But it is 0. Since the value of counter is not
// // returned AND counter is not defined in the global scope, count is "not
// // defined":

// console.log(counter)

// // SNIPPET #3 So to fix the above code, we now return counter:

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

// // Again, we were expecting counter = 3. But it is 1 every time. It did not work
// // because we reset the local counter every time we call the function.

// // SNIPPET #4 Here we wrap the counter incrementing code in function and then
// // call that function. This however does not change the output.

// function add() {
//   var counter = 0;
//   function plus() {counter += 1;}
//   plus();
//   return counter;
// }

// // Call add() 3 times
// console.log(add())
// console.log(add())
// console.log(add())

// SNIPPET #5 In order to change the output we need to use the peculiar behavior of IIFE's in javascript.

var add = (function() {
  var counter = 0;
  return function() {
    // The counter is initialized = 0 only once! Every subsequent invocation
    // will, use the value of counter that was calculated in the previous
    // invocation.
    console.log(counter)
    counter += 5;
    return counter;
  };
})();

// Call add() 3 times
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

// the counter is now 3
