//learning difference b/w array and tuple
//array:-
let array1 = ["ali", "Shan", "Nadia"]; //strongly type
console.log(array1);
let arry2 = [23, 45, 87, 12]; //inferring
console.log(arry2);
let arry3 = [12, 45, "sania", "pakistan", true, { name: "Rehan", age: 45 }]; //mixes data type
//tuple-data typed- array
let arr3 = ["Sania", false, "karacchi", 45, { name: "Ahmed", quarter: 2 }];
console.log(arr3);
export {};
//Summary 
//1. Immutability: Tuples are immutable, meaning their values cannot be changed once they're defined. Arrays, on the other hand, are mutable, and their values can be modified.
//2. Fixed size: Tuples have a fixed size that is defined when they're created. Arrays, however, can grow or shrink dynamically.
//3. Homogeneous vs Heterogeneous: In most languages, arrays are homogeneous, meaning they can only store values of the same type. Tuples, however, can be heterogeneous, meaning they can store values of different types.
// //Array methods work on tuple ???
// In TypeScript, tuples do not have all the methods that arrays have, but they do support some methods. Here are some array methods that can be used on tuples:
// 1. forEach: Executes a provided function once for each element in the tuple.
// Example: myTuple.forEach(element => console.log(element));
// 1. map: Creates a new tuple with the results of applying the provided function to each element.
// Example: myTuple.map(element => element * 2);
// 1. slice: Returns a new tuple containing a copy of a portion of the original tuple.
// Example: myTuple.slice(1, 3);
// 1. concat: Returns a new tuple containing the elements of the original tuple and additional elements.
// Example: myTuple.concat(['hello', 42]);
// 1. includes: Determines whether the tuple contains a specified element.
// Example: myTuple.includes('hello');
// 1. indexOf: Returns the index of the first occurrence of a specified element.
// Example: myTuple.indexOf('hello');
// 1. join: Joins all elements of the tuple into a string.
// Example: myTuple.join(', ');
// 1. toString: Returns a string representation of the tuple.
// Example: myTuple.toString();
// 1. every: Returns true if all elements in the tuple satisfy the provided testing function.
// Example: myTuple.every(element => element > 0);
// 1. some: Returns true if at least one element in the tuple satisfies the provided testing function.
// Example: myTuple.some(element => element > 0);
// Keep in mind that tuples are immutable, so methods like push, pop, shift, and unshift are not available. Additionally, some methods may not work as expected due to the fixed size and immutability of tuples.
//we can add values in tupple by rest operator
