// 3 important array methods that works on an array as:-
//map------
//filter----
//reduce-----

//we need to work with that methods in next quarter.

//1------------------map method----------------

//1- creates a newly array by doin some operations.
//2- returns a new array.
//3- doesnot effect the original array.
//4- takes a call back function.

let arr1=[10,20,30,40,50];
//apply mathematics operation
let newarraybymap=(arr1.map(elem=>{
    return elem+10;//you can do here all mathematics operations and numeric methods
}) );
console.log(newarraybymap);//[ 20, 30, 40, 50, 60 ]

//apply numeric methods.
let newarrbynumericmethods=(arr1.map(ele=>{
    return ele.toString()//check by using dot here , you have options of numeric data.
    
}))
console.log(newarrbynumericmethods);//[ '10', '20', '30', '40', '50' ]
//The reason why the array brackets are not removed is because the map() method returns a new array. Even though you're converting each element to a string using toString(), the result is still an array of strings.

//map at string:-

//1. Double each character:

let myString = "hello";

let newString = myString.split("").map(char => char + char).join("");

//1. myString.split(""): This splits the string "hello" into an array of individual characters: ["h", "e", "l", "l", "o"].

// 2. map(char => char + char): This applies a transformation to each character in the array. For each character, it concatenates the character with itself, effectively doubling each character. So, the array becomes: ["hh", "ee", "ll", "ll", "oo"].

// 3. join(""): This takes the array of doubled characters and joins them back together into a single string, without any separators. The resulting string is: "hheelllloo".


console.log(newString); // "hheelllloo"

let arr2=["pak","china","saudia"];
let newarr2 = arr2.map(country => country.toUpperCase());

console.log(newarr2); // ["PAK", "CHINA", "SAUDIA"]

//another example: 

let newarr3 = arr2.map(country => country + " is a great country");

console.log(newarr3); // ["pak is a great country", "china is a great country", "saudia is a great country"]
//----------------------------------------------------------------------

//filter-Method

let filteredArrr = arr2.filter(country => country.length > 3);

console.log(filteredArrr); // ["china", "saudia"]

let filteredArr = arr2.filter(country => country.startsWith("s"));

console.log(filteredArr); // ["saudia"]

//reduce-Methods.
// Sum all numbers in an array:

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(sum); // 15

let words = ["Hello", "World", "JavaScript"];

let sentence = words.reduce((acc, current) => acc + " " + current, "");

console.log(sentence); // "Hello World JavaScript"


//-----------------------------------------------------------------------
