let teacher = {
    name: "Zeeshan",
    experience: "10"
};
console.log(teacher.name);
console.log(teacher["experience"]);
//---------------------------------------------------------------------------------------------------
// Type Declaration
//: This is the type annotation, which defines the shape of the object that the student variable can hold.
let student; //data type---------------??? ""
//values assigned
student = {
    name: "Hira",
    age: 30
};
console.log(student["name"]);
console.log(student.age);
//--------------------------------------------------------------------------------------------------------
//Read me---------------------Object Types
//In JavaScript, we use objects to store and pass around data. An object is like a container that holds key-value pairs, like a name and age.
//In TypeScript, we define the structure of these objects using object types. There are three ways to do this:
//1. Anonymous object type: We define the object type directly where we use it, like this:
function greet1(person) {
    return "Hello " + person.name;
}
function greet2(person) {
    return "Hello " + person.name;
}
function greet(person) {
    return "Hello " + person.name;
}
export {};
// In all three examples, we're defining a function greet that takes an object with two properties: name (a string) and age (a number). The function returns a greeting message using the name property.
// The key point is that we're defining the structure of the object that the function expects, using object types, interfaces, or type aliases. This helps TypeScript ensure that we're passing the right kind of data to the function, and prevents errors.
