//Nominal Typing
// Try to assign an object to a Person variable
let person = { name: 'John', age: 30 }; // Error: Type '{ name: string; age: number; }' is not assignable to type 'Person'.
let employee = { name: 'Jane', age: 25 };
// Try to assign the Employee object to a Person variable
let person2 = employee; // Error: Type 'Employee' is not assignable to type 'Person'.
let anotherPerson = { name: 'Bob', age: 30 };
// Assign the AnotherPerson object to a Person variable
let person3 = anotherPerson; // Okay
export {};
//   In this example, we define a nominal type Person with the nominal keyword. We then try to assign an object that is structurally compatible with Person to a Person variable, which errors because the object is not nominally compatible.
//   We then define another interface Employee that is structurally compatible with Person, but not nominally compatible. Trying to assign an Employee object to a Person variable also errors.
//   Finally, we define another interface AnotherPerson that is both structurally and nominally compatible with Person, and we can assign an AnotherPerson object to a Person variable without errors.
//   Note that the nominal keyword is only available in TypeScript 4.1 and later versions. In earlier versions, the type checker always uses structural typing.
// Structural Typing
// interface Person {
//   name: string;
//   age: number;
// }
// let person: Person = { name: 'John', age: 30 };
// let employee = { name: 'Jane', age: 25 };
// person = employee; // Okay
// In this example, the type checker allows the assignment because the structure of the employee object matches the structure of the Person interface, even though they don't have the same name.
// Note that the nominal option in the tsconfig.json file controls whether the type checker uses nominal typing or structural typing. If nominal is set to true, the type checker will use nominal typing, and if it's set to false or omitted, the type checker will use structural typing.
