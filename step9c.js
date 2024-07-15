//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName = "Khan") {
    return `My Name is ${firstName} ${lastName} `;
}
let result11 = buildName("Bob", "Ahmed"); //works correctly because last parameter is optional 
console.log(result11); //My Name is Bob Khan or My Name is Bob Aahmed
//output 
//let result21 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
let result31 = buildName("Bob", "Adams"); //correct
//Bob Adams
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional for defult value)
//declare a type of variable as a function.
let buildName11;
//assigned a value to a vaariable that holds function.
buildName11 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName11("sana", "tahir")); //Sana tahir
console.log(buildName11("sana")); //Sana Khan
//Read me 
//In Js
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
//IN TS
function applyDiscount2(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount2(100)); // 95
//Notice that you cannot include default parameters in function type definitions. The following code will result in an error:
//function type definition 
//A function type definition typically consists of:
// 1. Parameter list: The types of the parameters the function takes.
// 2. Return type: The type of value the function returns.
let promotion; //A parameter initializer is only allowed in a function or constructor implementation.
let promotion1; //it is allowed
//Default parameters and Optional parameters:
// Like optional parameters, default parameters are also optional. It means that you can omit the default parameters when calling the function.
// In addition, both the default parameters and trailing default parameters share the same type
function applyDiscount1(price, discount) {
    return price - discount;
}
//share the same type:
// (price: number, discount?: number) => number
function applyDiscount23(price, discount = 0.5) {
    return price - discount;
}
function applyDiscount21(price, discount) {
    return price;
}
//   Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.
// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.
function greet(name, message, greeting = 'Hello', ...restparams) {
    console.log(`${greeting}, ${name}! ${message}`);
    console.log(restparams);
}
greet('Alice', 'Nice to meet you!', 'hi', "when did you come"); // Output: Hi, Alice! Nice to meet you!
greet("sana", "hey !", "how are you");
export {};
// Summary:
// Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value for the parameter.
// Default parameters are optional.
// To use the default initialized value of a parameter, you omit the argument when calling the function or pass the undefined into the function.
