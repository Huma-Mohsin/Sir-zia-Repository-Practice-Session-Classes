//Read me file-2
let person = { name: 'John', age: 30 };
let employee = { name: 'Jane', age: 25 };
// Okay: Types are compatible based on shape.
person = employee;
// In structural typing, the types Person and Employee are considered compatible because they have the same shape (same properties), regardless of their names.
//-------------------------------------------------------------------------
// Duck Typing (Usage-Based Structural Equivalence)
//Duck typing neither cares about the name nor the structure of the type. It must have the given method or properties required by the operation.
// TypeScript does not allow Duck Typing. But JavaScript does.
let person1 = { name: 'John', age: 30 }; //This variable is assigned an object with a name property and an age property. Its type is inferred to be an object with these properties
let employee1 = { name: 'Jane', age: 25 };
// Okay: Types are compatible based on usage.
person1 = employee1;
// In duck typing, the types are considered compatible based on their usage, without explicit type declarations. This is commonly found in dynamic languages like JavaScript.
//or
//In duck typing, the focus is on the properties and behavior of the objects, rather than their explicit type declarations. This allows for more flexibility and dynamic behavior, but also requires more careful consideration of the object's structure and usage to avoid errors.
// // who inferred this in js ?
// Some popular JavaScript engines that perform type inference include:
// - V8 (used by Google Chrome and Node.js)
// - SpiderMonkey (used by Mozilla Firefox)
// - JavaScriptCore (used by Safari)
// These engines use various algorithms and heuristics to infer the types of objects and variables, based on their structure and usage.
// In summary:
// - Nominal typing checks compatibility based on type names.
// - Structural typing checks compatibility based on type shape.
// - Duck typing checks compatibility based on usage, without explicit type declarations.
//-------------------------------------------------------------------------------
//code in the document.
//But if we make age property private in both classes then they become incompatible. The following code throws an error.
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//-------------------------------------------------
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//-------------------------------------------------------
//creating an instance
let dog = new Dog("mars", 20);
let cat = new Cat("mars", 20);
dog = cat; //error
cat = dog; //error
export {};
