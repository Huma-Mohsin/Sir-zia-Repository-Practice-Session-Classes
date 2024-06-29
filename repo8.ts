// Array is a collection of different elements of different data types.

// In JavaScript, an array is both a data structure and a type.

//Data Structure:
//An array is a data structure that allows you to store and manipulate a collection of elements. It's a way to organize and store data in a linear sequence, making it easy to access and modify the elements.

//Type:
//In JavaScript, an array is also a type, specifically an object type. Yes, you read that right - an array is an object! This means that an array has properties and methods, just like objects do. The Array constructor creates an array object, and you can use the typeof operator to check its type:
let arr1:any=[]
console.log("Type of Array always return :",typeof arr1) // object

// 1. Declaring an array: You can declare an array using square brackets [] or the Array constructor.

// Example: 
let myArray1:number[] = [1, 2, 3]; //or  square bracket
console.log("line 17",typeof myArray1);

let myArray2 = new Array(1, 2, 3);// called array constructor.[1,2,3]

//add by method:
let myArr3= Array.of(5,10,8);
console.log(myArr3);//[5,10,8]; 

// 1. Array elements: You can access and manipulate array elements using their index (position in the array).

// Example: 
myArray1[0] = 10; //sets the first element to 10.

//1. Array length: The length property returns the number of elements in the array.

//Example: 
console.log("Length of myArray1: ",myArray1.length);
 //returns 3.

//1. Array spread: You can use the spread operator ... to create a new array from an existing one or to merge arrays.
//spread operator always used in arrays , and their identification is that it is placed at start.



//Example: 
let newArray3 = [...myArray1, 4, 5]; //creates a new array with the elements of myArray and two additional elements.
console.log("NewArray3: ",newArray3);//[1,2,3,4,5]

//Array concatenation: You can use the concat() method to merge arrays.

//Example: 
let newArray = myArray1.concat([44, 45]);// creates a new array with the elements of myArray and two additional elements.
console.log("Concatenation Result:", newArray);

//Array destructuring is a syntax feature in JavaScript that allows you to extract elements from an array and assign them to variables in a concise and expressive way. It's a powerful tool for working with arrays and simplifying code.

// Extract first two elements
let [a1, b1] = [1, 2, 3];
console.log("Extract first two elements",a1, b1); // Output: 1, 2

// Extract last element
let [, , c] = [1, 2, 3];
console.log(" Extract last element",c); // Output: 3

// Extract middle elements
let [a2, ...rest] = [1, 2, 3, 4];
console.log("Extract middle elements ",a2, rest); // Output: 1, [2, 3, 4]

// Extract elements with default values
let [a = 10, b = 20,c1=22] = [1,3];  //"default value" assignment
console.log("Extract elements with default values ",a, b); // Output: 1, 20

//- a gets the value 1 from the array

//The syntax a = 10 and b = 20 is called a "default value" assignment. It means that if the array doesn't have enough elements to assign to a and b, the default values 10 and 20 will be used instead.

// In this case, the array [1] only has one element, so:

// - a is assigned the value 1 (from the array)
// - b is assigned the default value 20 (since there's no second element in the array)

// Then, console.log(a, b); outputs 1, 20.

//Array destructuring is a powerful feature that can simplify your code and make it more expressive.

//------------------------------------------------------------

//Sir Zia repo

//methods to define an array

let array1 : number[] = [5, 6, 7];//correct syntax
console.log("Array1", array1[1]);//correct syntax


let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

//let array4: number[] = new number[2];//error--'number' only refers to a type, but is being used as a value here.

//resolved error as:

//The error message is indicating that number is a type, but you're trying to use it as a value. This is because number is a type keyword in TypeScript, not a constructor function.

//To fix this, you can use the Array constructor function instead:
let array4: number[] = new Array(2); // Creates a new array with a length of 2 using the new Array(2) constructor.
console.log("before asigning values",array4);//[a,b]

//The resulting array4 variable is an empty array with a length of 2, waiting to be filled with values. For example:

console.log(array4); // Output: [undefined, undefined] or [ <2 empty items> ]
//[ <2 empty items> ]
//asssigning a value to an undefined.
array4[0] = 10;
array4[1] = 20;

console.log("After asigning values",array4); // Output: [10, 20]

//Summarize:
//In JavaScript, an array can be defined in several ways:

//1. Array Literal:

let arr = [1, 2, 3, 4, 5];

//1. Array Constructor:

let array_2 = new Array(1, 2, 3, 4, 5);

//1. Array Constructor with Length:

let array_3 = new Array(5); // creates an array with length 5, all elements are undefined


//1. Array.of():

let array6 = Array.of(1, 2, 3, 4, 5); // creates an array with the given elements
console.log("Array of method:" ,array6);//[1,2,3,4,5]

//Read me -Important Methods:

//noImplicitAny:

// When you don’t specify a type, and TypeScript can’t infer it from context/values, the compiler will typically default to any.

// You usually want to avoid this, though, because any isn’t type-checked. 

//The noImplicitAny compiler flag is a TypeScript setting that helps you catch errors and improve code quality. When enabled, it raises an error when the type any is implied (or inferred) for a variable or parameter, rather than being explicitly declared.

// To use this flag, you can add it to your tsconfig.json file:

// {
//   "compilerOptions": {
//     // ... other options ...
//     "noImplicitAny": true,
//     // ... other options ...
//   }
// }
//------------------------------------------------------------------------------