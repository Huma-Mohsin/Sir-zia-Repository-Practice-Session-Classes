// Generics in TypeScript
// Generics help us write functions that work with multiple types, while keeping type safety.
//We add a "type parameter" (like <Type>) to the function signature. This creates a link between the input and output types.
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4])); //1
console.log(firstElement(["a", "b", "c"])); //0
console.log(firstElement([])); //undefined
console.log(firstElement([true, false])); //true
console.log(firstElement([{ name: "sara", age: 23 }, { name: "sana", age: 28 }])); //{ name: 'sara', age: 23 }
// Benefit
// Generics ensure the function works with the correct type, making our code more flexible, reusable, and accurate!
//Inference by TS:-
function map(arr, func) {
    return arr.map(func);
}
//Input: the type of the input array elements, func: a function that takes an Input element and returns an Output element
const result1 = map([1, 2, 3, 4, 5], (elem) => elem * 2);
console.log(typeof result1); //typeof result1 returns "object" because the result is an array, and arrays are objects in JavaScript.
console.log(result1);
const result2 = map(["ali", "amna"], (elem) => elem.toUpperCase());
console.log(typeof result2);
console.log(result2);
//TypeScript could infer both the type of the Input type parameter (from the given string array), as well as the Output type parameter based on the return value of the function expression (number).
//Constraints
/*
 a function called longest that compares two values and returns the longer one.

But, we only want this function to work with values that have a length property that is a number (like arrays or strings).

So, we add a constraint to the function that says: "Only allow types that have a length property that is a number".It means that the type must have a property named "length" that is a number. For example:

- Arrays have a "length" property that is a number, so they satisfy this constraint.
- Strings also have a "length" property that is a number, so they satisfy this constraint.
- Numbers do not have a "length" property, so they do not satisfy this constraint.
- Objects that have a "length" property that is a number also satisfy this constraint.

This constraint is written like this: Type extends { length: number }

- Now, when we call the longest function with two arrays or two strings, it works fine.
- But, if we try to call it with two numbers (which don't have a length property), it gives an error.

*/
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]); //[ 1, 2, 3 ]
console.log(longerArray);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob"); //alice
console.log(longerString);
//-----------------------------------------------------------------
function longestobj(a, b) {
    if (Object.keys(a).length >= Object.keys(b).length) //the function uses the Object.keys() method to get an array of the object's properties, and then compares the length of those arrays to determine which object has more properties.
     {
        return a;
    }
    else {
        return b;
    }
}
const longerObject = longestobj({ name: "sania", age: 12 }, { name: "waniya", age: 34 });
console.log(longerObject); //{ name: 'sania', age: 12 }
//working with constraints
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100); //Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
//Limitations :-
//Specifying Type Arguments:
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr = combine([1, 2, 3], ["hello"]); //Type 'string' is not assignable to type 'number'.
//If you intended to do this, however, you could manually specify Type:
const arr2 = combine([1, 2, 3], ["hello"]);
console.log(arr2);
export {};
