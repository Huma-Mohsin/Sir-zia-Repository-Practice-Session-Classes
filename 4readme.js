// //Union Types
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
function printId(id) {
    console.log("Your ID is: " + id);
}
//invoke
printId(101); //accept numeric data-101
printId("202"); //accept string data
//printId({ myID: 22342 });//Error----Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// let obj={
//   name:"ali"
// }
//---------------------------------------------------------------------------
//{ [key: string]: number | string }
//COMMON METHODS
//Working with union Types
//TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
function printId1(id) {
    console.log(id.toUpperCase()); //ERROR________Property 'toUpperCase' does not exist on type 'string | number'.Property 'toUpperCase' does not exist on type 'number'.
}
//printId1("pakistannnn")
//The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
//For example, TypeScript knows that only a string value will have a typeof value "string":
let name1 = 1234;
console.log(typeof name1); //returns type
let d = typeof name1;
console.log(d);
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
console.log("After narrowing");
printId2(89);
printId2("pakistan");
//-----------------------------------------------Another example of narrowing
function welcomePeople(x) {
    if (Array.isArray(x)) {
        //Array.isArray(x) is a JavaScript method that checks if the value of x is an array. It returns a boolean value:
        //   - true if x is an array
        //   - false if x is not an array
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("SAna");
welcomePeople(["Saira", "Tania"]);
//------------------------------------------------------------
//   Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 34, 6]));
console.log(getFirstThree("typescript"));
console.log(getFirstThree(["ali", "amna", "ayesha", "daniyal"]));
//-----------------------------------------------------------
//LITERALS TYPES
let x = "hello";
// OK
x = "hello";
// ...
//x = "howdy"; // Type '"howdy"' is not assignable to type '"hello"'.
//-------------------------
// //Narrowing Types
// Narrowing types in TypeScript refers to the process of refining a type to a more specific type based on certain conditions or checks. Here are some examples:
// 1. Type Guards:
function isString(x) {
    return typeof x === 'string'; //It uses the typeof operator to check the data type of x, that allows the function to narrow the type of x. If x is a string, the function returns true; otherwise, it returns false.
}
console.log(isString(45)); //false
console.log(isString(true)); //false
console.log(isString("america")); //true
//------------------------------------------------------
let xa = 'hello';
if (isString(xa)) {
    x.toUpperCase(); // x is now narrowed to string
}
console.log("line 101", xa); //hello
console.log("line 102", isString("documented")); //true
console.log("line 103", isString(34)); //false
//-----------------------------------------------------
//1. Control Flow Analysis:
let x3 = 'hello';
if (typeof x3 === 'string') {
    x.toUpperCase(); // x is now narrowed to string
}
console.log("122 line", isString("shazia")); //true
console.log("123 line", isString(56)); //false
// 1. Type Assertions:
let x4 = "America";
if (typeof x4 === 'string') {
    const y = x4;
    y.toUpperCase(); // y is now narrowed to string
    console.log("x4 is a string");
}
//1. Optional Chaining:
let x6 = {}; // x6 is an object with an optional property foo of type string.
x6.foo?.toUpperCase(); // x.foo is now narrowed to string | undefined
//Optional Chaining
// let x6: { foo?: string } = {};
// - The ? symbol indicates that foo may be absent (i.e., undefined).
// x6.foo?.toUpperCase();
// - The ?. operator is called optional chaining. It allows us to access properties deep within an object without causing errors if any part of the chain is null or undefined.
// - If x6.foo is present (i.e., not undefined), the toUpperCase() method will be called on it.
// - If x6.foo is absent (i.e., undefined), the expression will return undefined instead of throwing an error.
// - Therefore, the type of x6.foo is narrowed to string | undefined.
// 1. Nullish Coalescing:
let x8 = "hello";
const y1 = x8 ?? 'default'; // y is now narrowed to string
console.log("line 152", y1);
//  The ?? operator is called nullish coalescing. It returns the first operand if it is not null or undefined, and the second operand if it is null or undefined.
// - If x8 is not null or undefined (i.e., it's a string), y1 will be assigned the value of x8.
// - If x8 is null or undefined, y1 will be assigned the string 'default'.
// - Therefore, the type of y1 is narrowed to string.
// These examples demonstrate how TypeScript's type system can narrow types based on various conditions, allowing for more precise and safe code.
//TRuTHINESS NARROWING
// Truthiness narrowing is a concept in TypeScript that refers to the process of refining a type to a more specific type based on a truthy or falsy value.
// In JavaScript, a "truthy" value is a value that is considered true in a boolean context, such as:
// - true
// - non-empty strings
// - non-zero numbers
// - objects
// - arrays
// - functions
// On the other hand, a "falsy" value is a value that is considered false in a boolean context, such as:
// - false
// - 0
// - ""
// - null
// - undefined
// - NaN
// In TypeScript, when you use a truthy or falsy value in a conditional statement or a logical operation, the type of the value is narrowed to a more specific type based on its truthiness.
// For example:
let x9 = 'hello';
if (x9) {
    x9.toUpperCase(); // x is now narrowed to string
}
console.log("line198", x9);
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
export {};
//-----------------------
