//key aspects of functions in TS:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//1. Function declarations: You can declare functions using the function keyword, followed by the function name and parameters in parentheses.
//Example:
function greet1(name) { }
//2. Function expressions: You can also define functions as expressions, which can be assigned to variables or passed as arguments to other functions.
//Example: 
var greet2 = function (name) { };
//3. Parameter types: You can specify the types of function parameters using type annotations.
//Example: 
function greet3(name, age) { }
//4. Return types: You can specify the return type of a function using the : operator.
//Example: 
function greet4(name) { }
//5. Optional parameters: You can mark parameters as optional using the ? operator.
//Example: 
function greet5(name, age) { }
//6. Default parameters: You can specify default values for parameters using the = operator.
//Example: 
function greet6(name, age) {
    if (age === void 0) { age = 30; }
}
//7. Rest parameters: You can use the ... operator to specify a variable number of arguments.
//Example: 
function greet7(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
}
//8. Async functions: You can define asynchronous functions using the async keyword.
//Example: 
function getData(url) {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
//9. Generators: You can define generator functions using the * operator.
//Example: 
function generator() { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }
//10. Type inference: TypeScript can automatically infer the types of function parameters and return types based on the code inside the function.
//----------------------------------------------------------------------------------------
//Function Type Expressions
///also called Function Composition or H.O.F
//The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
function greeter1(fn) {
    //(fn: (a: string) => void), this annotation in fn shows the parameter is of function type.
    //This tells TypeScript that fn is a function that takes a string parameter and returns no value (void).
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
    //The printToConsole function matches the type expected by greeter because it takes a single string parameter and logs it to the console.
}
greeter1(printToConsole); // When we call greeter(printToConsole), the following happens:
function greeterier(fn) {
    // ...
}
// This defines a type for a function that has a description property (a string) and takes a number argument, returning a boolean.
//- We can then use this type to define a function that takes a DescribableFunction as a parameter in any function, like this:
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6)); //default description returned true
}
//- Finally, we can create a function that matches this type and pass it to doSomething:
function myFunc1(someArg) {
    return someArg > 8;
}
myFunc1.description = "default description";
doSomething(myFunc1);
// This code defines a function myFunc with a description property and passes it to doSomething, which logs a message to the console.
//---------------------------------------------------------------------------------------
