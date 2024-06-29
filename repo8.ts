// Array is a collection of different elements of different data types.

// In JavaScript, an array is both a data structure and a type.

//Data Structure:
//An array is a data structure that allows you to store and manipulate a collection of elements. It's a way to organize and store data in a linear sequence, making it easy to access and modify the elements.

//Type:
//In JavaScript, an array is also a type, specifically an object type. Yes, you read that right - an array is an object! This means that an array has properties and methods, just like objects do. The Array constructor creates an array object, and you can use the typeof operator to check its type:
let arr1:any=[]
console.log(typeof arr1) // returns "object"

// 1. Declaring an array: You can declare an array using square brackets [] or the Array constructor.

// Example: 
let myArray1 = [1, 2, 3]; //or 
let myArray2 = new Array(1, 2, 3);// called array constructor.

// 1. Array elements: You can access and manipulate array elements using their index (position in the array).

// Example: 
myArray1[0] = 10; //sets the first element to 10.

//1. Array length: The length property returns the number of elements in the array.

//Example: 
myArray1.length; //returns 3.

//1. Array spread: You can use the spread operator ... to create a new array from an existing one or to merge arrays.

//Example: 
let newArray3 = [...myArray1, 4, 5]; //creates a new array with the elements of myArray and two additional elements.
console.log("NewArray3: ",newArray3);

//Array concatenation: You can use the concat() method to merge arrays.

//Example: 
let newArray = myArray1.concat([44, 45]);// creates a new array with the elements of myArray and two additional elements.
console.log(newArray);
