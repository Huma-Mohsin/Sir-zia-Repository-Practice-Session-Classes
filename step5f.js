// Any
//Any: A type that represents any value, including null and undefined.The any type disables type checking, allowing you to assign any value to a variable.
let myval; // here we ddeclare a variable.
//values assigning here
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK -- assigned class here
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK
//Summary-In the example, myval is declared with the type any, and various values are assigned to it without any errors.
//-------------------------------------------------------------------------------------
//Unknown:
// a subtype is a type that inherits all the properties and behaviors of its supertype, and may also have additional specific properties or restrictions.
//The unknown type is a type that represents any value, similar to any. However, unlike any, it is not a subtype of every other type, and it does not disable type checking. Instead, it requires an explicit type assertion or a narrowing operation to assign a value to a variable of a different type.
let value;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK
//Summary
//In the example, value is declared with the type unknown, and various values are assigned to it without any errors. 
//The unknown and any types in TypeScript have similar purposes, but there are key differences between them:
// any:
// - Disables type checking for a specific value or variable.
// - Allows assigning any value to a variable of type any.
// - essentially turns off type checking for that specific value or variable.
// unknown:-
// - Represents a value that could be anything, including null and undefined.
// - Requires explicit type assertions or narrowing operations to assign a value to a variable of a different type.
// - Does not disable type checking; instead, it forces you to explicitly verify the type of the value before using it.
// - Is a type-safe alternative to any.
// summary:
//- any is a "type escape hatch" that disables type checking, while
//- unknown is a "type safeguard" that requires explicit type verification.
//------------------------------------------------------------------------------------------------
// Assigning a value of type unknown to variables of other types.to check data type compatiblity
let val; //parent variable or main variable.
const val1 = val; // OK-- Assigning a value of type unknown to a variable of type unknown is allowed.
const val2 = val; // OK--Assigning a value of type unknown to a variable of type any is allowed, because any is a supertype of unknown.
const val3 = val; // Will throw error---Assigning a value of type unknown to a variable of type boolean will throw a type error, because unknown is not a subtype of boolean.
const val4 = val; // Will throw error-- Assigning a value of type unknown to a variable of type number will throw a type error, because unknown is not a subtype of number.
const val5 = val; // Will throw error--Assigning a value of type unknown to a variable of type string will throw a type error, because unknown is not a subtype of string.
const val6 = val; // Will throw error--Assigning a value of type unknown to a variable of type Record<string, any> will throw a type error, because unknown is not a subtype of Record<string, any>.
const val7 = val; // Will throw error-- Assigning a value of type unknown to a variable of type any[] will throw a type error, because unknown is not a subtype of any[].
const val8 = val; // Will throw error--8. Assigning a value of type unknown to a variable of type (...args: any[]) => void will throw a type error, because unknown is not a subtype of (...args: any[]) => void.
//Record<string, any>
//The Record<string, any> type is a flexible and dynamic way to represent objects in TypeScript.
// The data type Record<string, any> is a type of object in TypeScript that represents a collection of key-value pairs, where:
// - The keys are strings (represented by the type string)
// - The values can be of any type (represented by the type any)
// In other words, Record<string, any> is a type of object that has string keys and values that can be of any data type, including numbers, strings, booleans, objects, arrays, and more.
// Here's an example of what an object of type Record<string, any> might look like:
// {
// 	name: 'John',
// 	age: 30,
// 	address: {
// 		street: '123 Main St',
// 		city: 'Anytown',
// 		state: 'CA',
// 		zip: '12345'
// 	},
// 	interests: ['reading', 'hiking', 'cooking']
// }
// In this example, the object has three properties:
// - name with a string value
// - age with a number value
// - address with an object value that has its own properties
// - interests with an array value
// The Record<string, any> type is often used to represent objects that have dynamic or heterogeneous data, where the keys and values can vary depending on the specific use case.
//In summary, assigning a value of type unknown to a variable of a different type will throw a type error, unless the target type is unknown or any. This is because unknown is a type-safe alternative to any, and the compiler requires explicit type verification before assigning a value of type unknown to a variable of a different type.
// Never----
//The never data type in TypeScript represents a value that will never occur. It is a type that is used to indicate that a function or expression will never return or produce a value.
// Here are some key characteristics of the never data type:
// 1. Never returns: A function with a return type of never will never return a value.
// 2. Always throws: A function with a return type of never will always throw an error or exception.
// 3. Unreachable code: Code that is marked as never will never be executed.
// 4. Type guard: never can be used as a type guard to narrow the type of a value to a more specific type.
// 5. Error handling: never can be used to indicate that a function or expression will always throw an error.
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
// //Never Type
// The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
// The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
// let value6:never;
// value6=123;
let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
export {};
