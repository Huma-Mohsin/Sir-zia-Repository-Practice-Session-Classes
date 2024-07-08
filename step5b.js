// anonymous object type
let teacher = {
    name: "Zeeshan",
    exp: 10
};
let student = {
    name: "Hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
let storeManager = {
    name: "Bilal"
};
export {};
// // Trying to add new properties or methods later will result in an error
//  type Person3 = {
//  age: number; // Error: Duplicate identifier 'Person'.
// sayHello(): void; // Error: Duplicate identifier 'Person'.
//  }
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
