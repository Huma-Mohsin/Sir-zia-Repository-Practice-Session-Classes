//explicit casting. //defined by user...
////This code demonstrates two ways to use type assertions in TypeScript.
let myname = "Zia Khan";
let a = myname; //typecasting through type exxpression
console.log(a); //This uses the "as" keyword to assert that myname is a string. This is a type assertion, which tells TypeScript to treat myname as a string even though it's declared as unknown. This allows us to access the length property, which is a property of strings.
//2-Ts with angle bracket
console.log(myname.length); //This uses angle brackets (<string>) to assert that myname is a string. This is an alternative syntax for type assertions, and it achieves the same result as the first example.
export {};
//readme 
//typecasting in ts
// Typecasting in TypeScript is a way to explicitly tell the compiler to treat a value as a specific type, even if the compiler infers a different type. There are two types of typecasting in TypeScript:
// 1. Assertion
// expression as type
// Example:
// let value: unknown = 'hello';
// let length: number = (value as string).length;
// 1. Assertion with angle brackets
// <type>expression
// Example:
// let value: unknown = 'hello';
// let length: number = (<string>value).length;
// Note that typecasting doesn't change the runtime type of the value; it only tells the compiler to treat it as a specific type. If the value isn't actually of the asserted type, it can lead to runtime errors.
// Typecasting is useful when:
// - Working with third-party libraries that don't have TypeScript definitions
// - Using legacy code that doesn't have explicit types
// - Converting between types (e.g., string to number)
// However, use typecasting judiciously and only when necessary, as it can bypass TypeScript's type safety features.
