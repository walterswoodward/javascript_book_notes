// 1. Named and Unnamed/Anonymous Function Expressions:

// Function Expressions:
// named
const mult = function multiply(a, b) {
  return a * b;
};
console.log(mult.name);

// unnamed
const subtract = function(a, b) {
  return a - b;
};
// defaults to variable name -- weirdly the book says this should be an empty
// string...?
console.log(subtract.name);

// 2. Function Declarations:

function divide(a, b) {
  return a / b;
}

// 3. Illustrating Hoisting:

// global functions:
const run = function run() {
  console.log("global run()");
};

const walk = function walk() {
  console.log("global walk()");
};

// Hoisted Function containing functions with same name!
function exercise() {
  console.log(run());
  // Not defined because walk is over written in this local scope by the walk function expression below
  console.log(walk());
  // function declaration: As soon as run is re-declared inside this function, the above invocation of run does not work
  function run() {
    console.log("local run");
  }
  // function expression:
  const walk = function walk() {
    console.log("local walk");
  };
}
// exercise()

// 4. Passing Function with parens will invoke the function as well, so
//    generally you should be passing callbacks without parens

// 5. SKIPPED Callback Pattern + Example / Callbacks + Scope / Asynch Event Listeners / Timeouts / Callbacks in Libraries

// 6. Returning Functions:

// Most useful while utilizing closure:

const createUser = function() {
  let count = 0;
  return function counter() {
    return (count = count + 1);
  };
};

const next = createUser();
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

// Since a closure is created each time createUser (and thus counter()) are
// invoked, you can use this closure to store some private data, such as the
// number of users created. This counter data is only avaiable when createUser is
// actually being used.

// 7. SKIPPED Self-Defining Functions

// 8. Immediate Functions: A syntax that enables you to execute a function as
//    soon as it is defined

// a. Useful because they allow you to prevent against global scope pollution /
// variable leakage

// b. Often used in bookmarklets

// c. Alternatively you can use the `Immediate Object Initialization` Pattern,
// which does essentially the same thing but uses the `init()` method.

// const firstName = {
//   firstLetter: (function(){
//     let name = "Walter"
//     return name.slice(0,1)
//   }()),
//   getFirstLetter: function (){
//     return this.firstLetter
//   }
// }

// // firstLetter is a "String Property" NOT a function BUT it is a function
// console.log(firstName.firstLetter)
// console.log(firstName.getFirstLetter())

// 9. Memoization

// `function`s inherit properties and methods ex. length
function apples(gala, goldDel, redDel) {
  return gala + goldDel + redDel;
}
console.log(apples(5, 4, 7));
// Functions are a kind of object, so they come prepackaged with certain
// properties and methods, one of which is the length property which contains
// the number of arguments expected.
console.log(apples.length);

// memoization example:
const letterCount = function(brandName) {
  if (!letterCount.cache[brandName]) {
    // var result = {} ... expensive (ex. recursive) operation

    // This is obviously not an expensive operation, but is just here as a
    // placeholder example for visualization purposes
    const result = brandName.length;
    letterCount.cache[brandName] = result;
  }
  return letterCount.cache[brandName];
};
// cache storage
letterCount.cache = {};
console.log(letterCount("Coca-Cola"));
console.log(letterCount("Pepsi"));
console.log(letterCount("Dr.Pepper"));
console.log(letterCount("Schweppes"));
console.log(letterCount.cache);

// ========= CURRYING ========= //
// Definition: The process of making a function understand and handle partial application (p.81)

// 10. Function Application

// When you invoke a function, under the hood, you are really "applying" it with
// some syntactical sugar. See the two equivalent examples below:

// // function defined
// const fairwell = function(name){
//   console.log(this)
//   return "Fairwell" + (name? " " + name +", my old friend":"") + "!";
// }

// // function invoked
// console.log(fairwell())
// console.log(fairwell("Benji"))

// // function "applied"
// // If the first parameter is null - then "this" refers to the global object
// console.log(fairwell.apply(null))
// console.log(fairwell.apply(null, ["Benji"]))

// So you can see from the example above that what you typically think of as
// "invoking" a function, is in reality applying it while setting the first
// parameter - to the object to which `this` refers, by default: 1. (if declared
// globally) to the window object, 2. (if declared inside an object) to the
// object

// 11. Currying

function curry(fn) {
  console.log(fn);
  var slice = Array.prototype.slice;
  // Extracts 2nd parameter passed into curry, and pushes to an empty array
  var stored_args = slice.call(arguments, 1);
  console.log(stored_args);
  return function() {
    // without a second index parameter given, defaults to 0
    var new_args = slice.call(arguments);
    var args = stored_args.concat(new_args);
    console.log(new_args);
    // args: stored_args and new_args concatenated together:
    console.log(args);
    return fn.apply(null, args);
  };
}

// function defined
function addAll(...args) {
  return args.reduce((a, b) => a + b);
}

// This would be the initial setup -- a partial list of values presumably from a previous session:
const cupsOfCoffeeToDate = 100000
var newAdd = curry(addAll, cupsOfCoffeeToDate);
// This value would be inputted by the user:
const cupsOfCoffeeThisWeek = {Monday: 2, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 0, Sunday: 1}
console.log(newAdd( ...Object.values(cupsOfCoffeeThisWeek)));