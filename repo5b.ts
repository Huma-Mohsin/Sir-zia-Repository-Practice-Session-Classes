// anonymous

let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}

//---------------------------------------------------------------------------------------------------------

//read me__________________difference b/w typeAliases and interface

// simplified explanation of the differences between Type Aliases and Interfaces in TypeScript:

// Similarities:

// 1- Both can define shapes of objects
// 2- Both can be used to create new types
// 3- Both support features like properties, methods, and inheritance.

// Summary of point 2 and 3:-
// both Type Aliases and Interfaces can be used to create new types and support features like properties, methods, and inheritance:

// Type Aliases:

// - Creating a new type:

type Person1 = { name: string; age: number };

//- Supporting properties:

type Address1 = { street: string; city: string };

//- Supporting methods:

type Calculator1 = { add: (a: number, b: number) => number };

//- Inheritance (using intersection):

type Employee1 = Person & { department: string }; //{ department: string } is a new anonymous type with a single property called department of type string .

//In TypeScript, an anonymous type is a type that is defined inline, without a name, using the {} syntax. It's a type that is created on the fly, without a explicit name or declaration.

// Here's an example:

// let person: { name: string, age: number };

// In this example, the type of the person variable is an anonymous type with two properties: name (a string) and age (a number).

//------------------------------------------------------------------------------------------------------------------------

//Interfaces:

//- Creating a new type:

interface Person { name: string; age: number }

//- Supporting properties:

interface Address { street: string; city: string }

//- Supporting methods:

interface Calculator { add(a: number, b: number): number }

//- Inheritance (using extends):

interface Employee extends Person { department: string }

// Note that the syntax is slightly different between Type Aliases and Interfaces, but they both achieve similar results.

// ---------------------------------------------------Differences:

// 1- Extensibility:

//Interfaces are always extendable, meaning you can add new properties or methods later. Type aliases, on the other hand, cannot be re-opened to add new properties.

//Interfaces:

interface Person2 {
name: string;
}

// Later, we can add new properties or methods to the Person interface
interface Person2 {
age: number;
sayHello(): void;
}

//This is allowed because interfaces are "open" and can be extended later.

//Type Aliases:

// type Person3 = {
// name: string;
// }

// // Trying to add new properties or methods later will result in an error
// type Person3 = {
// age: number; // Error: Duplicate identifier 'Person'.
// sayHello(): void; // Error: Duplicate identifier 'Person'.
// }

//This is not allowed because type aliases are "closed" and cannot be re-opened to add new properties or methods.

///Think of interfaces like a dynamic blueprint that can be modified later, while type aliases are like a snapshot of a type that cannot be changed once defined.

//-------------------------------------------------------------------------------------------

// 2- Inheritance: Interfaces use the extends keyword for inheritance, while type aliases use the & operator (intersection) to combine types.



// 3- Mutability: Interfaces can be modified later by adding new properties or methods. Type aliases, once defined, cannot be changed.

// In summary:

// - Use interfaces when you want to define a type that can be extended or modified later.
// - Use type aliases when you want to create a shortcut for a complex type or combine existing types.

// Remember, interfaces are like contracts that can be expanded, while type aliases are like snapshots of a type that cannot be changed later.



//******************************************************************************************************

/*    git add .
     git commit -m "Updated code"
    git push origin  */