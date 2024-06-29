//strongly typed syntax
let a : string = "Pakistan";
a = "USA"; 
let b : number = 9;
let c : boolean = true;

//type inference
let e = "USA";
let f = 10.9;
f = 22;
let g = false;
g = true;

//Explicit-(strongly) type annotations: You can add type annotations to your code to specify the expected types of variables,function parameters, and return types.


//Readme-------Type Annotations on Variables


// noImplicitAny(imp0rtant)
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

// When you declare a variable using const or let, you can optionally add a type annotation to explicitly specify the type of the variable:

let myName: string = "Alice";

//(infer type-implicitly type)

// In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer:

// // No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "true";
//myName=true;


// For the most part you don’t need to explicitly learn the rules of inference. If you’re starting out, try using fewer type annotations than you think - you might be surprised how few you need for TypeScript to fully understand what’s going on.