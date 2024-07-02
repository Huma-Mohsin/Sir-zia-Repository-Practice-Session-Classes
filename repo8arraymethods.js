//readme
let str_array = ["Saira", "Sana", "zameer", "ayesha"];
let num_array = [5, 10, 15, 20, 25, 30];
let other = ["daniyal", "shoaib", "yousuf", "kamran"];
//methods
//1----indexof
console.log(str_array.indexOf("Zameer")); //-1,returns -1 for the value which is not present in an array right now.
console.log(str_array.indexOf("zameer")); //2
console.log(num_array.indexOf(20)); //3
//-------------------------------------------------------------
//2-lastindexOf:
console.log(str_array.lastIndexOf("ayesha")); //3
console.log(str_array.lastIndexOf("Ayesha")); //-1
console.log(str_array.lastIndexOf("sana")); //-1
console.log(num_array.lastIndexOf(45)); //-1
console.log(num_array.lastIndexOf(30)); //5
//-----------------------------------------------------------
//3-concat
//console.log("concat : ",str_array.concat(num_array))//Argument of type 'number[]' is not assignable to parameter of type 'string | ConcatArray<string>'.
console.log("concat : ", str_array.concat(other)); //concat :  [ 'Saira', 'Sana', 'zameer', 'ayesha', 'daniyal', 'shoaib','yousuf,'kamran' ]
//----------------------------------------------------------
//4-join()  //this method joins all elements of the array into a string with a given operator.a. If an operator is not given, it joins elements with a comma(,).
console.log("line 32", str_array.join()); //Saira,Sana,zameer,ayesha
console.log(str_array.join(" and ")); //Saira and Sana and zameer and ayesha
console.log("line 37", str_array.slice(0, -1).join() + " and " + str_array[str_array.length - 1]); //saira,sana,zameer and ayesha
//str_array.slice(0, -1): This creates a new array with all the elements of str_array except the last one. The slice method returns a shallow copy of a portion of the array, and the -1 index means "one element from the end".or Takes all the elements in the array except the last one
// + " and ": This adds a string literal " and " to the end of the concatenated string.
// + str_array[str_array.length - 1]: This adds the last element of the original array (str_array) to the end of the string. str_array.length - 1 calculates the index of the last element.
console.log(num_array.join()); //5,10,15,20,25,30
//----------------------------------------------------------------------------------
//4--- push---add at last of an array
console.log(str_array.push("Rahila")); //returns the length of an array//-----5;
console.log(str_array); //[ 'Saira', 'Sana', 'zameer', 'ayesha', 'Rahila' ]
console.log(num_array.push(40)); //returns length
console.log((num_array));
//[
//     5, 10, 15, 20,
//    25, 30, 40
//  ]
//------------------------------------------
//5-pop():-  ----removes from last in an array
console.log(str_array.pop()); //shows popped element.------Rahila
console.log(str_array); //shows remaining array after pop----[ 'Saira', 'Sana', 'zameer', 'ayesha' ]
console.log(num_array.pop());
console.log(num_array);
//------------------------------------------------------------------
//reverse()
console.log(str_array.reverse()); //
console.log(num_array.reverse()); //[ 5, 10, 15, 20, 25, 30 ] becomes [ 30, 25, 20, 15, 10, 5 ]
//-----------------------------------------------------------------
//shift() 
console.log("74", str_array); //[ 'ayesha', 'zameer', 'Sana', 'Saira' ]
console.log(str_array.shift()); //shows removed element from first-----ayesha
console.log("line 75", num_array.shift()); //30
console.log(str_array); //shows updated array----[ 'zameer', 'Sana', 'Saira' ]
//---------------------------------------------------------------------
//unshift()//add at first index
console.log(str_array.unshift("zain")); //4
console.log(str_array); //[ 'zain', 'zameer', 'Sana', 'Saira' ]
console.log(num_array.unshift()); //5
console.log(num_array); // [ 25, 20, 15, 10, 5 ]
//Without passing a parameter, unshift() removes the first element of the array and returns the new length of the array.
//unshift() without parameters works similar to shift(), but with a key difference:
// - shift() removes the first element from the array and returns that element.
// - unshift() without parameters removes the first element from the array, but returns the new length of the array
//---------------------------------------------------
// slice()--returns new array, doesnot change in an original array.
console.log("96: ", str_array); //96:  [ 'zain', 'zameer', 'Sana', 'Saira' ]
console.log(str_array.slice(0, 3)); //[ 'zain', 'zameer', 'Sana' ]--returns new array
console.log(str_array); //[ 'zain', 'zameer', 'Sana', 'Saira' ]
console.log(num_array); //[ 25, 20, 15, 10, 5 ]
console.log(num_array.slice(2, 4)); //[ 15, 10 ]
console.log(num_array); //[ 25, 20, 15, 10, 5 ]
// splice()
// This method can be used for multiple purposes. For,
// 1. Add an element to an array
// 2. Replace specific elements within an array
// 3. Remove specific elements from an array
//array.splice(index, number of elements to be removed, element1,..,elementN)
console.log(str_array); //[ 'zain', 'zameer', 'Sana', 'Saira' ]
console.log(str_array.splice(2, 1)); // [ 'Sana' ]
console.log("line 117-", str_array); //line 117- line 117- [ 'zain', 'zameer', 'Saira' ]
console.log(str_array.splice(2, 1, "Javeria", "Ali", "Ahmed")); //[ 'Saira' ]
console.log("line-119", str_array); //line-119 [ 'zain', 'zameer', 'Javeria', 'Ali', 'Ahmed' ]
console.log(str_array.splice(1)); //[ 'zameer', 'Sana', 'Saira' ]
//This uses the splice method to remove elements from the array starting from index 1 (the second element). The method returns an array of the removed elements, which in this case are 'zameer', 'Sana', and 'Saira'. 
console.log("112: ", str_array); //zain----The original array is modified, and the first element ('zain') remains.
console.log(str_array.splice(2, 0)); //[]
//console.log(str_array.splice(2,1,"Javeria","Ali","Ahmed"));//[]
console.log(str_array); //[ 'zain', 'Javeria', 'Ali', 'Ahmed' ]
console.log(other); //[ 'daniyal', 'shoaib', 'yousuf', 'kamran' ]
console.log(other.splice(1, 2, "zohaib", "sana")); //["shoaib","yousuf]
console.log("134-", other); //[ 'daniyal', 'zohaib', 'sana', 'kamran' ]
console.log(other); //[ 'daniyal', 'shoaib', 'yousuf', 'kamran' ]
console.log(other.splice(2, 1, "tahir", "omer")); //[ 'yousuf' ]
console.log(other); //[ 'daniyal', 'shoaib', 'tahir', 'omer', 'kamran' ]
//task--- to implement splice method on num_array to check whether this method works on a numeric data or not.
//------------------------------------------------------------------------------
// toString()-comma seperated values,convert array into string.
console.log(str_array); //[ 'zain', 'Javeria', 'Ali', 'Ahmed' ]
console.log(str_array.toString()); // zain,Javeria,Ali,Ahmed
console.log(num_array.toString()); // 25,20,15,10,5, change numeric data into string.
let a = 45; //tostring method is also used in variables to convert type into string.
console.log(a + 56); //101
console.log(a.toString() + 56); //4556 shows string number.
//console.log("151-"a);
//----------------------------------------------------------------------
//every()
//The every() method is a JavaScript array method that checks if all elements in an array pass a test implemented by a provided function. It returns a boolean value indicating whether all elements satisfy the condition.
const ages = [18, 25, 30, 40];
const allAdults = ages.every(age => age >= 35);
console.log("161--", allAdults); // 161-- false
// In this example, the every() method checks if all ages in the array are 18 or above. Since all elements pass the test, it returns true. If any age were below 18, it would return false.
let arr3 = ["ali", "imran", "ayesha"];
let arr4 = arr3.every(ele => ele !== "huma");
console.log("168-", arr4); //true
let arr = ["ali", "saira", "imran"];
// Using every() and includes()
let arr1 = arr.every(ele => arr.includes(ele));
console.log("175-", arr1); // true if all elements match, false otherwise
//o/p ====175- true
//------------------------------------------------
let names = ["ALi", "Sahir", "Sana"];
let arr5 = names.every(func => func === "Ali" || "Sahir" || "Sana");
console.log(arr5);
//-------------------------------------------------------------
//some()
// This method is generally used for testing purposes.
// i.e. To know whether at least a single item from an array is fulfilling a given condition or not.
const allages = [18, 25, 30, 50];
const someAdults = ages.some(age => age >= 45); //true
console.log(someAdults);
//---------------------------------------------------
//sort()
//alphabetical sorting.
console.log(str_array); //[ 'zain', 'Javeria', 'Ali', 'Ahmed' ]
//console.log(str_array.sort((a,b) => a-b));b/c this works for numbers 
//If you want to sort an array of strings, you should use a different sorting function, like this:
str_array.sort((a, b) => a.localeCompare(b));
console.log(str_array); //[ 'Ahmed', 'Ali', 'Javeria', 'zain' ]
//------------------------------------------------------------------
let str_array1 = ["Saira", "Sana", "zameer", "ayesha"];
str_array1.sort((a, b) => b.localeCompare(a));
console.log("line206-", str_array1); //line206- [ 'zameer', 'Sana', 'Saira', 'ayesha' ]
//numerical sorting:-
console.log(num_array); //[ 25, 20, 15, 10, 5 ]
console.log(num_array.sort((a, b) => a - b)); //asscending order.
//[ 5, 10, 15, 20, 25 ]
console.log(num_array.sort((a, b) => b - a)); //descending order.
//[ 25, 20, 15, 10, 5 ]
//------------------------------------------------------------------
//fill()
//The fill() method is a JavaScript array method that fills an array with a specified value, starting from a specified position (default is 0) and ending at a specified position (default is the end of the array).
// Syntax:
// arr.fill(value[, start[, end]])
// - value: The value to fill the array with.
// - start (optional): The position to start filling from (default is 0).
// - end (optional): The position to end filling at (default is the end of the array).
//Example:
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.fill(8, 2, 4); //add 8 value from 2nd index.last index behave as splice last index.
console.log(myArray); // [1, 2, 8,8,5,6,7]
export {};
