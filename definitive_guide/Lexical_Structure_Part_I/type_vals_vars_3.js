// 1. Functions in JavaScript are true values (objects!). JavaScript programs
//    can treat them like regular objects.

// 2. Functions that are written to be used (with the new operator) to
//    initialize a newly created object are known as constructors.

// a. Each constructor defines a class of objects — the set of objects
// initialized by that constructor. Classes can be thought of as subtypes of the
// object type. In addition to the Array and Function classes, core JavaScript
// defines three other useful classes:

// i. The Date class defines objects that represent dates. 

// ii. The RegExp class defines objects that represent regular expressions. 

// iii. The Error class defines objects that represent syntax and runtime errors
// that can occur in a JavaScript program.

// 3. Immutability of Strings: Strings can be thought of as arrays of
//    characters, and you might expect them to be mutable. In JavaScript,
//    however, strings are immutable: you can access the text at any index of a
//    string, but JavaScript provides no way to alter the text of an existing
//    string.


// 4. Since some implementations support octal literals and some do not, you
//    should never write an integer literal with a leading zero; you cannot know
//    in this case whether an implementation will interpret it as an octal or
//    decimal value. In the strict mode of ECMAScript 5 (“use strict”), octal
//    literals are explicitly forbidden.

// 5. JavaScript predefines global variables Infinity and NaN to hold the
//    positive infinity and not-a-number value. In ECMAScript 3, these are
//    read/write values and can be changed. ECMAScript 5 corrects this and makes
//    the values read-only. The Number object defines alternatives that are
//    read-only even in ECMAScript 3.

// 6. Not all characters are 16-bit (e.g. math chars):

// var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
// var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452

// p.length     // => 1: p consists of 1 16-bit element
// e.length     // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"
