//function padLeft1(padding: number | string, input: string): string {
//return " ".repeat(padding) + input;
//   Argument of type 'string | number' is not assignable to parameter of type 'number'.
//     Type 'string' is not assignable to type 'number'.
// }
//   TypeScript is warning us that we’re passing a value with type number | string to the repeat function, which only accepts a number, and it’s right. In other words, we haven’t explicitly checked if padding is a number first, nor are we handling the case where it’s a string, so let’s do exactly that.
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; //" ".repeat(padding): This repeats the space character (" ") padding times. The repeat() method is called on the string " ", and padding is used as the number of times to repeat it.
    }
    return padding + input;
}
console.log(padLeft(10000, "padding")); //if we call the padLeft function with a large number like 10000 and the string "padding", the function will repeat the space character 10000 times and concatenate it with the string "padding".
console.log(padLeft("narrowing", "with differenttypes"));
////////////////////////////////////////////////////////////
//shows messsgae here
function padLeft2(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; //(parameter) padding: number
    }
    return padding + input; //(parameter) padding: string
}
//------------------------------------
//typeof----type guards
//   TypeScript expects this to return a certain set of strings:
//   "string"
//   "number"
//   "bigint"
//   "boolean"
//   "symbol"
//   "undefined"
//   "object"
//   "function"
function printAll(strs) {
    if (typeof strs === "object" && strs !== null) { // added null check here, strs is not null before trying to iterate over it. This should fix the TypeScript warning!
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
printAll("Hello"); // Output: Hello
printAll(["Hello", "World", "TypeScript"]); // Output:
// Hello
// World
// TypeScript
printAll(null); // (no output, as the function does nothing in this case)
//-----------------------------------------------
//Truthiness narrowing:
// Truthiness narrowing is a concept in TypeScript that refers to the process of narrowing the type of a value based on its truthiness.
// In JavaScript, values can be considered "truthy" or "falsy". Truthy values are those that evaluate to true in a conditional statement, while falsy values evaluate to false.
// Examples of truthy values include:
// - true
// - Non-empty strings
// - Non-zero numbers
// - Objects
// - Arrays
// Examples of falsy values include:
// - false
// - 0
// - ""
// - null
// - undefined
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(237));
//---------------------------------------------
function printAll1(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log("No input provided"); // added default message
    }
}
printAll1(["a", "b", "c"]);
printAll1(null);
printAll1("singlestring");
//---------------------------------------------------
//
function printAll2(strs) {
    if (Array.isArray(strs)) { // Check if strs is an array
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log("No input provided");
    }
}
printAll2(["a", "b", "c"]); // Output: a, b, c
printAll2(null); // Output: No input provided
printAll2("singlestring"); // Output: singlestring
//Try:
// You’ll notice that we’ve gotten rid of the error above by checking if strs is truthy. This at least prevents us from dreaded errors when we run our code like:
// TypeError: null is not iterable
//----------------------------------------
function printAll3(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") { //We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printAll3(["a1", "b2", "c3"]); // Output: a1, b2, c3
printAll3(null); // Output: No 
printAll3(""); // Output: no
export {};
//This code is warning against using truthiness checking on primitives, like this: if (strs) { ... }.
// The issue is that truthiness checking can lead to unexpected results when working with primitive values like strings, numbers, or booleans.
// Here's what's happening:
// - if (strs) will evaluate to true if strs is a non-empty string, a non-zero number, or a boolean true.
// - However, if strs is an empty string (""), it will evaluate to false, even though it's a valid string!
// In the example code, if strs is an empty string, the if (strs) check will fail, and the code inside the if block will not run. This might not be the intended behavior.
// To avoid this issue, it's recommended to use more explicit checks, like if (strs !== null && typeof strs === "object") { ... } or if (Array.isArray(strs)) { ... }, as we discussed earlier.
// The warning is saying: "Don't use truthiness checking on primitives like this; it can lead to errors. Instead, use more specific and explicit checks to ensure correct behavior."
