
//Optional parameter:

// - A parameter that can be omitted when calling a function.
// - Denoted by a question mark (?) after the parameter name.
// - Allows the caller to choose whether to provide a value or not.

// you can call a function without passing any arguments even though the function specifies parameters. Therefore, JavaScript supports the optional parameters by default.

//Named function with optional parameters

//CALL SIGNATURES
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //also ok -Bob adams



//anonymous function type with optional parameters

//FUNCTION TYPE EXPRESSION
var buildName1 : (firstName: string, lastName?: string) => string = 

function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
	
//In TypeScript, the compiler checks every function call and issues an error in the following cases:

//1- The number of arguments is different from the number of parameters specified in the function.

//2- Or the types of arguments are not compatible with the types of function parameters

//you need to annotate optional parameters to instruct the compiler not to issue an error when you omit the arguments.

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(2,3,4));
console.log(multiply(2,3))
    
//Note that The optional parameters must appear after the required parameters or at the end  in the parameter list 
    
//if we do , 

function multiply1(a: number, b?: number, c: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

 //Summary

// Use the (parameter?: type) syntax to make a parameter optional.

// Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.