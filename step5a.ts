
let teacher = {
    name: "Zeeshan",
    experience: "10",
}
//access property of an object

console.log(teacher.name);//Zeeshan
console.log(teacher["experience"]);//10

//---------------------------------------------------------------------------------------------------
// Type Declaration

//: This is the type annotation, which defines the shape of the object that the student variable can hold.
let student : {
    name: string,
    age: number
}//data type---------------??? ""
 
//let z:string;

//values assigned
student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);//hira
console.log(student.age);//30

        


//--------------------------------------------------------------------------------------------------------

//Read me---------------------Object Types

//In JavaScript, we use objects to store and pass around data. An object is like a container that holds key-value pairs, like a name and age.

//In TypeScript, we define the structure of these objects using object types. 

//There are three ways to do this:

//1. Anonymous object type: We define the object type directly where we use it, like this:


function greet1(person: { name: string ,  age: number }) {
  return "Hello " + person.name;//here we access object property.
}
//invoke
console.log(greet1({ name: "Hira", age: 30 }));//Hello Hira


//2. Interface: We define a named interface, like this:

interface Person1 {
  name: string;
  age: number;
}

function greet2(person: Person1) {
  return "Hello " + person.name;
}

//invoke
console.log(greet2({ name: "Hira", age: 30 }));

//3. Type alias: We define a named type alias, like this:

type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}

// In all three examples, we're defining a function greet that takes an object with two properties: name (a string) and age (a number). The function returns a greeting message using the name property.

// The key point is that we're defining the structure of the object that the function expects, using object types, interfaces, or type aliases. This helps TypeScript ensure that we're passing the right kind of data to the function, and prevents errors.