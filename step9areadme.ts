
//key aspects of functions in TS:

//1. Function declarations: You can declare functions using the function keyword, followed by the function name and parameters in parentheses.

//Example:
 function greet1(name: string) {  }

//2. Function expressions: You can also define functions as expressions, which can be assigned to variables or passed as arguments to other functions.

//Example: 
const greet2 = (name: string) => { }

//3. Parameter types: You can specify the types of function parameters using type annotations.

//Example: 
function greet3 (name: string, age: number) {  }

//4. Return types: You can specify the return type of a function using the : operator.

//Example: 
function greet4(name: string): void { }

//5. Optional parameters: You can mark parameters as optional using the ? operator.

//Example: 
function greet5(name: string, age?: number) {  }

//6. Default parameters: You can specify default values for parameters using the = operator.

//Example: 
function greet6(name: string, age: number = 30) {  }

//7. Rest parameters: You can use the ... operator to specify a variable number of arguments.

//Example: 
function greet7(name: string, ...args: string[]) {  }

//8. Async functions: You can define asynchronous functions using the async keyword.

//Example: 
async function getData(url: string) {  }

//9. Generators: You can define generator functions using the * operator.

//Example: 
function* generator() {  }

//10. Type inference: TypeScript can automatically infer the types of function parameters and return types based on the code inside the function.

//----------------------------------------------------------------------------------------

//Function Type Expressions
///also called Function Composition or H.O.F

//The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:

function greeter1(fn: (a: string) => void) {  
  
  //(fn: (a: string) => void), this annotation in fn shows the parameter is of function type.

//This tells TypeScript that fn is a function that takes a string parameter and returns no value (void).

  fn("Hello, World"); 
}
 
function printToConsole(s: string) {
  console.log(s);
//The printToConsole function matches the type expected by greeter because it takes a single string parameter and logs it to the console.
}

greeter1(printToConsole);// When we call greeter(printToConsole), the following happens:

//- greeter calls the fn function (which is printToConsole in this case) with the argument "Hello, World".
//- printToConsole logs the string "Hello, World" to the console using console.log.


//we can use a type alias to name a function type:

type GreetFunction1 = (a: string) => void;
function greeterier(fn: GreetFunction1) {
  // ...
}
//-------------------------------------------------------------------------------------------

//Call Signatures:-

// - In JavaScript, functions can have properties (like a description) in addition to being callable.

// - To define a type for a callable function with properties, we use an object type with a call signature.

// - The syntax for this is slightly different from a regular function type expression. Instead of using =>, we use :.


type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

// This defines a type for a function that has a description property (a string) and takes a number argument, returning a boolean.

//- We can then use this type to define a function that takes a DescribableFunction as a parameter in any function, like this:

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));//default description returned true
// //
// Calling myFunc(6) would return true, since 6 is greater than 3.

// Therefore, fn(6) in the doSomething function would also return true.

}

//- Finally, we can create a function that matches this type and pass it to doSomething:

function myFunc1(someArg: number) {
  return someArg > 3;  //this condition satisfied true or false for fn(6)
}
myFunc1.description = "default description";
doSomething(myFunc1);

// This code defines a function myFunc with a description property and passes it to doSomething, which logs a message to the console.

//---------------------------------------------------------------------------------------

//Construct Signatures:-

// - In JavaScript, functions can be called with the new operator to create a new object.
// - In TypeScript, these functions are called "constructors".
// - You can define a construct signature by adding the new keyword before a call signature.
// - Example:
type SomeConstructor = { new (s: string): SomeObject };
// //- a function that can be called with the new operator.
// - The function takes a string parameter s.
// - The function returns an object of type SomeObject.

interface SomeObject {
  name: string;
}

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
 }
// //-  it calls the ctor function with the string argument "hello" using the new operator.
// - The result is an object of type SomeObject, which is returned by the fn function.

// - You can also combine call and construct signatures in the same type.
// - Example: 
interface CallOrConstruct { (n?: number): string; new (s: string): Date; }
// - This allows an object to be called with or without the new operator, like JavaScript's Date object.

// By defining a construct signature, you can specify the type of object that will be created when a function is called with the new operator. This helps with type safety and better code organization.
