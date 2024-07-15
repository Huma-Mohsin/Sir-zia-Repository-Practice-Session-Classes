
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
//____________________

//Construct signatures are a way to define the shape of a constructor function's arguments and return type in TypeScript.

//type ConstructorType = {
//   new (arg1: Type1, arg2: Type2, ...): ReturnType;
// };

// An interface SomeObject with a name property of type string.
interface SomeObject {
  name: string;
}

type SomeConstructor = {
  new (s: string): SomeObject;//return an object in the form of some object. 
};

//A function fn that takes a constructor function ctor as an argument, which must return an object, of type SomeObject when called with the new keyword.
function fn(ctor: SomeConstructor) {
  return new ctor("hello");// calls the constructor with the argument "hello" and returns the resulting object.

}
//A class MyConstructor that implements the SomeObject interface, with a name property and a constructor function that initializes it.

//  the class must conform to the structure defined by the interface
class MyConstructor implements SomeObject {
  constructor(public name: string) {}//constructor is a special method in a class that is called when an object is created.
  // The class has a constructor that takes a string argument name and initializes the property.
  toString() {
    return `{ name: '${this.name}' }`;//- This method is a built-in method in JavaScript that returns a string representation of an object..

  }//In programming, a "string representation" of an object refers to a textual representation of that object's properties and values. It's a way to convert an object's data into a string format, making it easier to display, print, or transmit the object's information.
}

//A call to fn with MyConstructor as an argument, which creates a new instance of MyConstructor with the name "hello" and logs it to the console.


//a function can be called with a class as an argument in TypeScript. This is known as a "constructor function" or "class constructor".
const result = fn(MyConstructor);// This calls the fn function with the MyConstructor class as an argument.
//The function creates a new instance of MyConstructor with the name "hello" and logs it to the console.


//The output is an object with the property name equal to "hello".
console.log(result); // Output:  SomeClass { name: 'hello' }

//Constructor signatures are necessary in TypeScript for several reasons:

// 1. Type Safety: Constructor signatures ensure that the constructor function is called with the correct types of arguments, preventing errors and ensuring type safety.

// 2. Clear Intent: By defining a constructor signature, you clearly indicate the expected arguments and return type of the constructor, making your code more readable and maintainable.

// 3. Better Autocomplete: With constructor signatures, your IDE or editor can provide better autocomplete suggestions, as it knows the expected arguments and return type of the constructor.

// 4. Improved Error Messages: If you make a mistake when calling a constructor, the error message will be more informative and helpful, as it can reference the expected constructor signature.

// 5. Compatibility with Other Type Systems: Constructor signatures can help when working with other type systems or languages that have similar concepts, making it easier to integrate your code with theirs.

// 6. Documentation: Constructor signatures serve as a form of documentation, providing a clear and concise summary of the constructor's behavior and expectations.

// By using constructor signatures, you can write more robust, maintainable, and scalable code, and take advantage of TypeScript's advanced type features.

