// Is JSON is similar to javaScript objects? why
// Yes, JSON (JavaScript Object Notation) is similar to JavaScript objects. In fact, JSON is a subset of JavaScript object syntax.
// Here are some reasons why JSON is similar to JavaScript objects:
// 1. Object literal syntax: JSON uses the same object literal syntax as JavaScript, with curly braces {} and key-value pairs separated by commas.
// 2. Key-value pairs: Both JSON and JavaScript objects use key-value pairs to store data, where each key is a string and each value can be a string, number, boolean, array, or object.
// 3. Nested objects: Both JSON and JavaScript objects can have nested objects, where an object can contain another object as a value.
// 4. Arrays: Both JSON and JavaScript objects can contain arrays, which are collections of values.
// However, there are some differences between JSON and JavaScript objects:
// 1. Syntax: JSON is a more restrictive syntax than JavaScript objects. For example, in JSON, all keys must be strings, while in JavaScript objects, keys can be any type of value.
// 2. Data types: JSON only supports a limited set of data types, such as strings, numbers, booleans, arrays, and objects. JavaScript objects, on the other hand, can contain any type of value, including functions, null, and undefined.
// 3. Functions: JSON does not support functions, while JavaScript objects can contain functions as values.
// Overall, JSON is a lightweight, language-independent data interchange format that is easy to read and write, and is a subset of JavaScript object syntax.
// json syntax:
// {
//     "name":"John",
//     "age": 30,
//     " occupation": "Developer",
//     "skills": ["JavaScript", "HTML", "CSS"],
//     "address": {
//       "street": "123 Main St",
//       "city": "Anytown",
//       "state": "CA",
//       "zip": "12345"
//     },
//     "isAdmin": true,
//     "balance": 100.50,
//     "isNull": null
//   }
//   The issue is that you're trying to define a JSON object directly in your TypeScript code, which isn't allowed. TypeScript requires a specific syntax for defining objects, and JSON syntax isn't valid TypeScript syntax.
// To fix this, you can wrap your JSON object in a string literal, like this:
const data1 = '{"name": "John", "age": 30, "occupation": "Developer", "skills": ["JavaScript", "HTML", "CSS"], "address": {"street": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345"}, "isAdmin": true, "balance": 100.50, "isNull": null}';
//Or, you can define it as a TypeScript object, like this:
const data2 = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    isAdmin: true,
    balance: 100.50,
    isNull: null
};
export {};
