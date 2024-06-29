//UNION TYPES_COMMON METHODS WORKS W/O NARROWING.....
let myname; //union type is a combination of several data types into a single type, denoted by |.
myname = null; //data type-absent or zero .
console.log(myname); //o/p- null, ts narrowing itself means it infers byself.
myname = "zia";
console.log(myname); //o/p-zia
//myname = undefined; //Error
//In this case, TypeScript will throw an error because undefined is not a valid value for a variable with a union type that includes undefined. This is because undefined is a type that represents the absence of any value, and it's not a value that can be assigned to a variable.
//myname = 12; //Error
// ------------------------------------------------------------------------------------------------------------
let myAge; //broad...
myAge = 25; //narrowing-----TypeScript infers the type of 16 to be number.
console.log(typeof myAge);
// At this point, the type of myAge is narrowed from string | number to just number, because the assigned value is a number. This is called narrowing because the type of myAge has become more specific.
console.log(myAge);
//-------------------------------------------------------------------------------------------------------------
//ReadMe
// In TypeScript (TS), narrowing refers to the process of refining the type of a value or expression to a more specific type. This is done using various techniques, such as:
// 1. Type Guards: Using functions or conditions to narrow the type of a value.
// 2. Type Assertions: Explicitly telling the compiler to treat a value as a specific type.
// 3. Control Flow Analysis: The compiler inferring a more specific type based on the control flow of the code.
// 4. Type Inference: The compiler automatically inferring a more specific type based on the assigned value.
//Here are some code examples for each of the narrowing techniques:
//1. Type Guards
function isNumber(x) {
    return typeof x === 'number'; //typeof shows typeof value.
}
let x = 10; //union type
if (isNumber(x)) {
    console.log(x * 2); // x is now narrowed to number
}
//2. Type Assertions
let value2 = 'hello';
const stringValue = value2; //type assertion-forcfully-narrowing through type casting.
console.log(stringValue.toUpperCase()); // okay
//3. Control Flow Analysis
let value3 = "world";
if (typeof value3 === "string") {
    // value is now narrowed to string
    console.log(value3.toUpperCase()); // okay
}
//or
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
//invoke
console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(123.456)); // "123.46"
//**4. Type Inference**
let value = 'hello'; // inferred type: string
console.log(value.toUpperCase()); // okay
// Narrowing is useful in TS to:
// 1. Improve code readability and maintainability
// 2. Enable more accurate type checking and error reporting
// 3. Allow for more precise type definitions and interfaces
// 4. Enhance code analysis and tooling
// Some examples of narrowing in TS include:
// 1. Using the as keyword for type assertions: const value = expr as string;
// 2. Using type guards: if (typeof value === 'string') { /* value is now narrowed to string */ }
// 3. Using control flow analysis: if (value instanceof Error) { /* value is now narrowed to Error */ }
// By leveraging narrowing in TS, developers can write more robust, maintainable, and type-safe code.
//---------------------------------------------------------------------------------------------------------
//console.log(myAge.toLowerCase());//Error
//change value from number to string
myAge = "Dont Know"; //narrowing-Inference by Ts
console.log(myAge);
//--------------------------------------------------------------
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing.
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
//ternary operator
let newAge;
Math.random() > 0.6 ? newAge = "Khan" : newAge = 60;
console.log(newAge);
//console.log("RN:",Math.random() > 0.6 );
//console.log(newAge);
//newAge.toLowerCase();//Error: Transpiler cannot narrow
//  #1
if (newAge == "Khan") {
    // Type of newAge: string
    console.log(newAge.toUpperCase()); // Can be called
}
//#2
if (typeof newAge === "string") {
    // Type of newAge: string
    console.log(newAge.toLowerCase()); // Can be called
}
//#3
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
//====================================================
//string literals
let age = "ali";
//age="ahmed";
//- "died" (the string literal "died")
//- "unknown" (the string literal "unknown")
// age = 90;//OK
// age = "died";//OK
// age = "unknown";//OK
//age = "living";//Error
//The assignment age = "living"; is an error because "living" is not one of the allowed types in the union.
//-----------------------------------------------------------------------------------------------------------------
//LITERALS TYPE
let zia; //let zia: "zia"; declares a variable zia with a literal type that can only be the string "zia". This means that zia can only be assigned the value "zia", and no other value.
zia = "zia"; //The assignment zia = "zia"; is valid because it matches the literal type.
//zia = "khan"; //Error----The assignment zia = "khan"; is an error because "khan" is not the exact string "zia", which is the only allowed value for the zia variable.
//--------------------------------------------------------
//Literals types are a way to define a type that is a specific value. Here are some examples:
// 1. String literals:
let name = "John";
// In this example, the variable name can only be assigned the value "John".
// 1. Numeric literals:
let age1 = 30;
// In this example, the variable age can only be assigned the value 30.
// 1. Boolean literals:
let isAdmin = true;
// In this example, the variable isAdmin can only be assigned the value true.
// 1. Enum literals:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = Color.Red;
// In this example, the variable color can only be assigned the value Color.Red.
// 1. String literal types with union:
let direction = "north";
// In this example, the variable direction can only be assigned one of the values "north", "south", "east", or "west".
// Literals types are useful when you need to define a variable that can only hold a specific value or set of values. They can help catch errors and make your code more robust.
//---------------------------------------------------------------------------------------------------
//TERNARY OPERATOR
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined; //
// The ternary operator (condition ? trueValue : falseValue) is used to assign a value to the yourName variable. If the random number generated by Math.random() is greater than 0.6, yourName will be assigned the string "Hira Khan". Otherwise, it will be assigned undefined.
if (yourName) {
    yourName.toUpperCase(); // Ok: string
    // 1. if (yourName) { yourName.toUpperCase(); // Ok: string }
    // The if statement checks if yourName is truthy (i.e., not undefined or null). If it is, the code inside the block will be executed. Since yourName is guaranteed to be a string inside this block (due to the type guard), calling toUpperCase() is okay.
}
yourName?.toUpperCase(); //OK
let data; // as a nick name for broad union type
export {};
