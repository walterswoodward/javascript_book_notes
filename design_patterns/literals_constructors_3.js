// Chapter Summary: Don't use constructors (Object(), Array()). Use object
// literal notation instead.

// 1. Objects in javascript are essentially hash tables of key: value pairs
//    similar to what is called "associative arrays" in other languages.

// 2. Equivalent Examples of Object Literal versus Constructor Approach:

// Object Literal
const shoes = {color: "black"}

// Constructor
const shirt = new Object();
shirt.color="white";

console.log(shoes)
console.log(shirt)

// 3. Object Literals are preferred for two reasons:

// a. Less code 

// b. Writing objects with literals really drives home the reality that objects
// are just mutable hash tables. Nothing more.

// c. Object Literals have no scope resolution (?)

// 4.  If a function does not change from one instance of an object to another,
//     then it should be placed on that objects prototype NOT insides the
//     constructor.  The reason for this is that whenever you create a new
//     instance of Person, a new greet function is created HOWEVER, in the case
//     of the hello() function below, this redundancy is avoided.

// Function INSIDE constructor:
const Giraffe = function (name){
  this.name = name;
  this.greet = function(){
    return "greet function output: Hi I'm " + this.name;
  }
  
  this.whoami = function(){
    return this
  }
}

const spot = new Giraffe("Spot");
// By default, `new` objects return the newly created instance e.g. `this`
console.log(spot)
console.log(spot.whoami())

const babe = new Giraffe("Babe")
console.log(spot.greet())
console.log(babe.greet())

// Function defined on prototype:
Giraffe.prototype.hello = function (){
  return "hello function output: Hi I'm " + this.name;
}

console.log(spot.hello())
console.log(babe.hello())

// 5. Patterns for Enforcing new: 2 ways to write functions that add values to
//    an object. -- Helps to make sure your constructor always behaves as a
//    constructor HOWEVER you won't have access to methods written into the
//    constructor using this pattern

function Pancake(){
  const self = {}
  self.tastes = "sweet!";
  return self
}

function Omelette(){
  return {
    tastes: "savory!"
  };
}

const pancake = new Pancake()
const omelette = new Omelette()

console.log(pancake.tastes)
console.log(omelette.tastes)

// 6. Self-Invoking Constructor:

function EggsBenedict(){
  if(!(this instanceof EggsBenedict)){
    return new EggsBenedict();
  }
  this.tastes = "superb!";
}
EggsBenedict.prototype.didYouEnjoyYourMeal = "Yes!";
console.log(EggsBenedict().tastes)
console.log(EggsBenedict.prototype.didYouEnjoyYourMeal)

// 7. Remember that when using the Array Constructor that the input parameter is NOT a value but the length of the Array

const buttons = new Array(10) // This creates a new array called buttons with 10 empty slots!
console.log(buttons)
const pennies = new Array(10,0) // However if more than one argument is passed then the parameters are indeed treated as values
console.log(pennies)
// ALSO, if you pass in a non-integer number, then you will get an error -- this can be avoided by using Array Literal Notation:
// const PI = new Array(3.141)
const PI = [3.141]
console.log(PI)
// Use the fill() method if you want all inital elements to be something other than undefined
const hasTicket = new Array(25).fill(false)
console.log(hasTicket)

// Note: If you need to create an array of a specific length (non-dynamic), then
// you will need to use an array constructor notation

// 8. Various Ways to check if an element is a type of `Array`:  

// a. isArray() method: returns true if the argument is an array b. Write your
// own method using Object.prototype.toString(): returns [object Array] if arg
// is an array, or [object Object] if it is an object

// If the method isArray is not defined, then isArray is defined as a function
// that returns true if its arg is an array
if (typeof Array.isArray === "undefined"){
  Array.isArray = function (arg){
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
}

// 9. The ONLY syntactical difference between objects and JSON (JavaScript
//    Object Notation) is that ALL property names must be wrapped in quotes.

// 10. Three Ways to parse JSON and 1 Way NOT TO:

// a. Using JSON.parse() -- converts string to object
var tShirts = `{
  "large": "5",
  "medium": "2",
  "small": "12"
}`

console.log(JSON.parse(tShirts) )
// Convert object back to string:
console.log(JSON.stringify(tShirts))

// b. Using a JavaScript Library e.g. YUI3 (https://github.com/yui/yui3/wiki/Quick-Start):
// YUI().use('json-parse', function(Y) {
//   console.log(Y.JSON.parse(tShirts))
// })

// c. Using jQuery:
// console.log(jQuery.parseJSON(tShirts))


// 11. Regex Expression Literal -- pretty basic info here
const name = "Walter"
const reg = /alt/gi;
// versus
const regEx = new RegExp("alt", "gi");
console.log(name.toLowerCase().replace(reg, "ait"))
console.log(name.toLowerCase().replace(regEx, "ait"))

// 12. Primitive Wrapper Objects: Examples: Number(), String(), Boolean()
// a. converting primitives into objects allows for iteration (with regard to strings)
// b. grants access to useful methods inherited with the PWO's

const longStr = "BelloAppleCrunchFlipTossedDandelion"
// In order for the slice method to work, longStr is temporarily converted to an
// Object, sliced, then converted back to a string
console.log(longStr.slice(5,10))
let stringObj = new String(longStr)
console.log(stringObj)
// In particular, augmenting a primitive string value to an object allows you to create methods:
stringObj.smells = function(){
  return "Like a Dandelion of course!"
}
console.log(stringObj.smells())

// When used WITHOUT the new keyword, wrapper constructors convert the argument passed to them to the corresponding primitive value
const backToString = String(stringObj)
console.log(backToString)

const longNumber = 2.234872309845279348
console.log(longNumber.toFixed(2))
let floatObj = new Number(longNumber)
// Some Examples of Inherited Methods:
console.log(floatObj.toFixed(2))
console.log(floatObj.valueOf())
console.log(floatObj.toString())

