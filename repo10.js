//Read me:
//Typed Arrays-tuple
//A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
//Readonly Tuple:
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');//Property 'push' does not exist on type 'readonly [number, boolean, string]'.
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
//Example
const graph1 = [55.2, 41.3];
//Named tuples provide more context for what our index values represent.
//Destructuring Tuples
//Since tuples are arrays we can also destructure them.
//Example
const graph = [55.2, 41.3];
const [x, y] = graph;
// Destructuring of tuples is a feature in some programming languages that allows you to extract the elements of a tuple and assign them to separate variables in a single statement.
//For example, in JavaScript:
let tupled = [1, 2, 3];
let [a, b, c] = tupled;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
//----------------------------------------------------------------------
//Sir zia code
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
var tuple = [1, "bob"];
var secondElement = tuple[1]; // secondElement now has type 'string' 
//var secondElement: string
//access element at index 1 which is bob
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects means tuples provide a way to group and store data together without the need for explicit keys or syntax, making them a more concise and efficient option in certain situations.
// You can create a tuple using JavaScript's array syntax:
const failingResponse = ["Not Found", 404]; //const failingResponse: (string | number)[] //array
// but you will need to declare its type as a tuple.
const passingResponse = ["{}", 200]; //tuple-//how js response tuple?? it consider it as an array, tuple is for our understandings.
// If you hover over the two variable names you can see the
// difference between an array ( (string | number)[] ) and
// the tuple ( [string, number] ).
// As an array, the order is not important so an item at
// any index could be either a string or a number. In the
// tuple the order and length are guaranteed.
if (passingResponse[1] === 200) { //The if statement checks if the second element of the array (passingResponse[1]) is equal to 200.
    const localInfo = JSON.parse(passingResponse[0]); // If the condition is true, the first element of the array (passingResponse[0]) is parsed as JSON using JSON.parse(). The resulting object is assigned to the localInfo variable.
    console.log("line-87", localInfo); //JSON.parse() is a JavaScript function that parses a string as JSON (JavaScript Object Notation) and returns the resulting JavaScript object.
    //o/p----line-87 {}
    //   In other words, it takes a string that represents a JSON data structure and converts it into a JavaScript object that can be accessed and manipulated like any other object.
}
// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.
console.log(passingResponse[2]); //It is an unknown type (since it's not being accessed or assigned a value)
//const staff:[number, string, string, string?][]= or
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
//we can use first defined type alias in new type aliases.
//A pay stub, also known as a pay slip or paycheck stub
// This line defines a new type called PayStubs which is a tuple with two elements:
// * The first element is a StaffAccount tuple.
// * The second element is a variable number of number elements (indicated by the spread operator ...).
// //////////////   [0, "Adankwo", "adankwo.e@"],
//   [1, "Kanokwan", "kanokwan.s@"],
//   [2, "Aneurin", "aneurin.s@", "Supervisor"],
const payStubs = [
    [staff[0], 250], //- staff[0] is the first element of the staff array, which is a StaffAccount tuple.
    // The 250 is a single number element.
    [staff[1], 250, 260], //staff[1] is the second element of the staff array, which is a StaffAccount tuple.
    //The 250 and 260 are two number elements.
    [staff[2], 300, 300, 300], //staff[0] is the first element of the staff array, which is a StaffAccount tuple.
    //The 300, 300, and 300 are three number elements.
];
console.log("line-128", payStubs); //line-128 [
//   [ [ 0, 'Adankwo', 'adankwo.e@' ], 250 ],
//   [ [ 1, 'Kanokwan', 'kanokwan.s@' ], 250, 260 ],
//   [ [ 0, 'Adankwo', 'adankwo.e@' ], 300, 300, 300 ]
// ]
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1]; //800
console.log("line-130", monthOnePayments); //This line calculates the total payments for the first month by adding the second element of each PayStubs tuple (which is a number). The result is:
//250 + 250 + 300 = 800
const monthTwoPayments = payStubs[1][2] + payStubs[2][2]; //560
console.log("line-132", monthTwoPayments); //This line calculates the total payments for the second month by adding the third element of the second and third PayStubs tuples (which are both numbers). The result is:
//260 + 300 = 560
const monthThreePayments = payStubs[2][2];
console.log("line-134", monthThreePayments); //300
const stafff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
const payyStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[0], 300, 300, 300],
];
function calculatePayForEmployee(id, ...args) {
    //here ...args: [...number[]]: a variable number of number parameters (indicated by the spread operator ...) representing the employee's pay amounts for each pay period.
    //The function returns a number value representing the total pay for the employee.
    return args.reduce((acc, curr) => acc + curr, 10);
}
console.log(calculatePayForEmployee(staff[0][0], payStubs[0][1])); // 250----//This line calls the calculatePayForEmployee function with two arguments:
console.log(calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2])); // 510-----//This line calls the calculatePayForEmployee function with three arguments
export {};
//In the calculatePayForEmployee function, the 10 in args.reduce((acc, curr) => acc + curr, 10) is the initial value of the accumulator (acc).
// This means that the total pay calculation starts from 10, instead of 0.
// In the first console.log, the function is called with only one pay amount (250), so the total pay is 10 + 250 = 260. But since the function is designed to return the total pay without the initial 10, the output is 250.
// In the second console.log, the function is called with two pay amounts (250 and 260), so the total pay is 10 + 250 + 260 = 520. Again, the function returns the total pay without the initial 10, so the output is 510.
// If you want the calculation to start from 0, you can change the initial value to 0, like this: args.reduce((acc, curr) => acc + curr, 0).
//
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#tuples-in-rest-parameters-and-spread-expressions
// https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/
