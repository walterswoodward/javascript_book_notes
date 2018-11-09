// 1. Maintainable Code: Readable, Consistent, Predictable, looks as if it was
//    written by the same person, and documented. (p.10)

// 2. Always avoid creating global variables. Instead, use strategies like the
//    namespacing pattern, self-executing immediate functions, and don't declare
//    variables without let, const or var. (p.11)

// 3. Don't Use chaining assignments w/ declaration shorthand: In the example
//    below, while count is local, initial is global. You CAN use chaining as
//    long as you declare the variables first.

// antipattern, do note use
function foo() {
  var count = (intial = 0);
  // etc...
}

// this is okay:
function foo() {
  var count, intial;
  count = intial = 0;
  // etc...
}

// 4. Accessing the Global Object inside Environments where it can't be
//    accessed:

const global = function() {
  return this;
};

// ???

// 5. Always declare your variables at the top of your functions (remember hoisting (p.14))

// 6. When writing for loops, cache the length of the array first:

let arr = [1, 2, 3, 4];
// antipattern:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// do this instead:
let max;
for (let i = 0, max = arr2.length; i < max; i++) {
  console.log(arr[i]);
}

// 7. If you are enumerating over a non-iterable object using for...in, consider
//    filtering output with hasOwnProperty() to avoid logging prototype methods
//    along with your expected output.  See p.18

// 8. Don't augment built in prototypes...just don't

// Example of what not to do:

if (typeof Object.prototype.awesomeMethodIWrote !== "function"){
  Object.prototype.awesomeMethodIWrote = function () {
    // function code...
  }
}

// 9. Switch Statements: Always include a default: switch at the end of your SS,
//    don't use fall-throughs (cases without `break`)

// 10. Try to avoid using implied typecasting / type coercion as it can add to
//     confusion.  Instead only use ===. (This is debateably but might be more
//     readable for those not as familiar with this particular intricacy of
//     javascript!)

// 11. eval() is evil: Read this if you run into this particular case (p.21-23).
//     This discussion is helpful as well:
//     https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval

// 12. 


