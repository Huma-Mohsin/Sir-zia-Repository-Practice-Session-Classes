// let obj=[]; 
// let obj1:string[]  ;
let obj3 = {
    name: `sana`, //in backticks behaves as a string.
    age: 28,
    course: "Ai",
    isEnrolled: true,
    contact: 1234
};
let obj4 = {
    name: `saira`, //in backticks behaves as a string.
    age: 38,
    course: "Ai",
    isEnrolled: false,
    contact: 4567
};
//Acccess its properties.
//2 ways to acccess properties.
//1- dot notation
//2- by using square bracket not array.
console.log(obj3.name); //Sana
console.log(obj3["age"]); //28
let newobj = [{ name: "Saad", age: 15 },
    { name: "Sarmad", age: 25 }];
function greet(person) {
    return "Hello " + person.name;
}
;
// Example usage
const user = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Springfield",
        postalCode: "12345"
    }
};
console.log(user);
export {};
