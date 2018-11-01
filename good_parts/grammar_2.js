// Citation: Crockford, Douglas. JavaScript: The Good Parts(Chapter 2). O'Reilly Media. Kindle Edition. 

// 1. Avoid `/*...*/` comments - not just because of the issues have run into
//    but ALSO in the event that you are using RegEx
// 2. Unlike most other languages, Javascript has only 1 integer type, similar
//    to Java's `double`. 1 and 1.0 are the same value.
// 3. Use isNan() to check if a number is of type NaN. typeof will not work
//    here.
// 4. 1e2 === 100
// 5. \u conventions(Unicode Numbers - \uxxxx - hex number): "A" === "\u0041",
//    "O" === "\u004f", "z" === "\u007a"
// 6. Unlike many other languages, blocks in JavaScript do not create a new
//    scope.

// 7. A variable declared with var in a block scope (if, while, dowhile switch
//    etc. statements) is available outside of that block scope. This can be
//    fixed using let to create a new local scope within the block. Before ES6,
//    the only way to address this issue was to use an IIFE (see example below).

// // Blocks in Javascript don't create scope
// var carname = "Mercedes Benz";
// if (true) {
//   var carname = "Volvo";
//   console.log(carname); // Volvo
// }
// console.log(carname); // Volvo
// //IIFE Demo
// var carname = "Mercedes Benz";
// (function car(carname) {
//   var carname = "Volvo";
//   console.log(carname); // Volvo
// })();
// //carname prints out the global scope value
// console.log(carname); // Mercedes Benz

// //Block Scope Demo
// var carname = "Mercedes Benz";
// if (true) {
//   let carname = "Volvo";
//   let vehiclename = "Volvo";
//   //vehiclename is only accessible from within here
//   console.log(carname); //Volvo
// }
// console.log(carname); //Mercedes Benz
// console.log(vehiclename); //Uncaught ReferenceError: vehiclename is not defined

// 8. for loops, for...in, and for...of

// for...in

// * iterates over inherited properties as well

// ** iteration is done in arbitrary order so this is NOT good if ordered
//   iteration is required.

// *** works for arrays as well since arrays are just objects with ordered
// integer indices for keys HOWEVER, since iteration is NOT ordered, this is NOT
// recommended for arrays

// **** "It is usually necessary to test object.hasOwnProperty( variable) to determine
// whether the property name is truly a member of the object or was found
// instead on the prototype chain."

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: { f: 5 }
// };

// let toArray = [];
// for (const key in obj) {
//   toArray.push(obj[key]);
//   obj[key]++;
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(obj);
// console.log(toArray);

// for...of

// * Only works with iterable compound
// ** Useful for iterating over NodeLists!

// 9. JSON.stringify() only works on enumerable objects *.  If the object you
//    run JSON.stringify() on contains non-enumerable objects (see
//    Object.defineProperty()), then they will not be returned with the
//    stringified object!!! --
//    http://zduck.com/2013/non-enumerable-properties-in-javascript/

// 10. If the operand is an array or null, then the result is 'object', which is
//     wrong. There will be more about typeof in Chapter   6 and Appendix   A.

// 11. On operators: +, /, &&. ||:

// * The + operator adds or concatenates. If you want it to add, make sure both
// operands are numbers. 

// ** The / operator can produce a noninteger result even if
// both operands are integers. -- ??

// // *** The && operator produces the value of its first operand if the first operand
// // is falsy. Otherwise, it produces the value of the second operand. 

// console.log(0 && 1)
// console.log(1 && 0)

// // **** The || operator produces the value of its first operand if the first
// // operand is truthy. Otherwise, it produces the value of the second operand.

// console.log(0 || 1)
// console.log(1 || 0)

// 12. The parenthese in `function()` are called an `invocation operator` and
//     causes the execution of a function

// 13. Because of hoisting, all var statements in a function should be placed as
//     near to the top of the function as possible.

// 14. HOISTING:

// * Javascript only hoists declarations (e.g. `let x;`) NOT intializations:

// ** Because of this, it is best to avoid hoisting all together by declaring
// ALL variables at the TOP of your file/code block

// x = 5; // Assign 5 to x
// let y = x + 7
// console.log(y) // returns sum of x and 7 e.g. 12
// var x; // Declare x
// // VERSUS
// let a = b + 7
// console.log(a) // returns NaN
// var b = 5; // Declare x

// 15. Definition of objects:

// * Aside from the data types numbers, strings, booleans, null, and undefined ALL other values are objects.

// ** number, strings, and booleans are "object-like" in that they have methods BUT unlike objects, they are immutable

// *** Objects are "mutable keyed collections"

// **** The quotes around a property's name in an object literal are optional if the name would be a legal Javascript name and not a reserved word.