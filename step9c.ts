//Named function with optional and default parameters

//(Note that the parameter type will be optional when used with default value)
function buildName(firstName: string, lastName="Khan") : string {
    return `My Name is ${firstName } ${lastName} `;
   }
  
let result11 = buildName("Bob", "Ahmed");  //works correctly because last parameter is optional 
console.log(result11); //My Name is Bob Khan or My Name is Bob Aahmed
//output 
//let result21 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters

let result31 = buildName("Bob", "Adams");  //correct
//Bob Adams



//anonymous function type with defult parameters 

//(Note that the parameter type will be optional for defult value)

//declare a type of variable as a function.
let buildName11 : (firstName: string, lastName?: string) => string ;

//assigned a value to a vaariable that holds function.
buildName11=function(firstName: string, lastName:string = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName11("sana","tahir"))//Sana tahir
console.log(buildName11("sana")) //Sana Khan
											

//Read me 
//In Js
function applyDiscount(price:any, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95


//IN TS
function applyDiscount2(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount2(100)); // 95
						
//Notice that you cannot include default parameters in function type definitions. The following code will result in an error:

//function type definition 

//A function type definition typically consists of:

// 1. Parameter list: The types of the parameters the function takes.
// 2. Return type: The type of value the function returns.

let promotion: (price: number, discount: number = 0.05) => number; //A parameter initializer is only allowed in a function or constructor implementation.

let promotion1: (price: number, discount?: number) => number;//it is allowed


//Default parameters and Optional parameters:

// Like optional parameters, default parameters are also optional. It means that you can omit the default parameters when calling the function.

// In addition, both the default parameters and trailing default parameters share the same type

function applyDiscount1(price: number, discount: number): number {
   return price - discount; 
  }
  
  
  //share the same type:

  // (price: number, discount?: number) => number
  function applyDiscount23(price: number, discount=0.5): number {
    return price - discount; 
   }
  
  function applyDiscount21(price: number, discount?: number): number {
    return price;
  }


//   Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.

// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.
function greet(name: string, message: string, greeting: string = 'Hello',...restparams:string[]) {
    console.log(`${greeting}, ${name}! ${message}`);
    console.log(restparams)//[ 'when did you come' ]
  }
  greet('Alice','Nice to meet you!',"hi","when did you come","ts"); // Output: Hi, Alice! Nice to meet you!
  greet("sana","hey !" ,"how are you");

// Summary:

// Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value for the parameter.
// Default parameters are optional.

// To use the default initialized value of a parameter, you omit the argument when calling the function or pass the undefined into the function.

//Default Parameters:

function greet123(name: string = 'world') {
  console.log(`Hello, ${name}!`);
}

greet123(); // Output: Hello, world!
greet123('Alice'); // Output: Hello, Alice!

//In this example, the greet function has a default parameter name with a default value of 'world'. If no argument is passed, it defaults to 'world'.

//Trailing Default Parameters:

function add(x: number=5, y: number = 10, z: number = 20) {
  return x + y + z;
}
console.log(add());//35
console.log(add(10)); // Output: 40 (10 + 10 + 20)
console.log(add(10, 20)); // Output: 50 (10 + 20 + 20)
console.log(add(10, 20, 30)); 
// Output: 60 (10 + 20 + 30)

// In this example, the add function has trailing default parameters y and z with default values of 10 and 20 respectively. If fewer arguments are passed, the default values are used.