// 1. HTML is NOT case-sensitive; however JS is!

// 2. Note on Semi-Colon Safety: In general, if a statement begins with (, [, /,
//    +, or -, there is a chance that it could be interpreted as a continuation
//    of the statement before. Statements beginning with /, +, and - are quite
//    rare in practice, but statements beginning with ( and [ are not uncommon
//    at all, at least in some styles of JavaScript programming. Some
//    programmers like to put a defensive semicolon at the beginning of any such
//    statement so that it will continue to work correctly even if the statement
//    before it is modified and a previously terminating semicolon removed.

// 3. ​ On return and semi-colons:
return
true;
// evaluates to:
return; true;
// NOT
return true;
// LESSON: ​you must not insert a line break between return, break or continue
// and the expression that follows the keyword.

