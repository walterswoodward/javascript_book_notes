// 15. Definition of objects:

// * Aside from the data types numbers, strings, booleans, null, and undefined
//   ALL other values are objects.

// ** number, strings, and booleans are "object-like" in that they have methods
// BUT unlike objects, they are immutable

// *** Objects are "mutable keyed collections"

// **** The quotes around a property's name in an object literal are optional if
// the name is a legal Javascript name -
// https://mathiasbynens.be/notes/javascript-identifiers-es6

// Objects are passed around by reference. They are never copied: 

var x = stooge; 
x.nickname = 'Curly'; 
var nick = stooge.nickname; // nick is 'Curly' because x and stooge // are references to the same object 
console.log(nick)
var a = {}, b = {}, c = {}; // a, b, and c each refer to a different empty object 
a = b = c = {}; // a, b, and c all refer to the same empty object

