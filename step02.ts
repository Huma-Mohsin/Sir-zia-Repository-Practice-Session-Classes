//use const where variable values do not change.

//important
const a1 = 5;
//++a1; //preincrement----cause an errror b/c it is declare with constant

//a1=8;    //error to reassign
console.log(a1);  
//---------------------\

const b1 : number = 33;
const c1 ="best";
//------------------------------------------------------------
//I suggest use let instead of var everywhere, 
//because let has blocked scope,called lexical scope

//let z1 = 4;//-------------global variable, accessible for all
if (true) {
  let z1 = 4;  //scope level(let) or var is global or function level.
	//use z
}
else {
	let z1 = "string";
	//use z
}
console.log("let: " + z1);      // Error: z is not defined in this scope
//-----------------------------------------------------------------

//the variable z1 is declared inside the if and else blocks, which means it has a local scope and is not accessible outside those blocks

//-----------------------------------------------------

//global scope----hoisting


let z=45//global-hoisting
if (typeof z ==="string") {

  console.log("it is a string value",z) 
	//use z
}
else {
    
  console.log("it is a numeric value",z) 
	//use z
};


//Hoisting in JavaScript is the mechanism by which variables and function declarations are moved to the top of their scope before code execution ¹. JavaScript has two types of scope: global and local ². Global scope is the scope outside the outermost function or code while local scope is inside the function being executed ².

//Readme

// //Block-scoping
// When a variable is declared using let, it uses what some call lexical-scoping or block-scoping. Unlike variables declared with var whose scopes leak out to their containing function, block-scoped variables are not visible outside of their nearest containing block or for-loop.

function f1(input: boolean) {
  let a = 100;
  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  //return b;
}
//Here, we have two local variables a and b. a’s scope is limited to the body of f while b’s scope is limited to the containing if statement’s block.


//Another property of block-scoped variables is that they can’t be read or written to before they’re actually declared. While these variables are “present” throughout their scope, all points up until their declaration are part of their temporal dead zone. This is just a sophisticated way of saying you can’t access them before the let statement, and luckily TypeScript will let you know that.

// a2++; // illegal to use 'a' before it's declared; //TDZ
// let a2:any;

//Something to note is that you can still capture a block-scoped variable before it’s declared. The only catch is that it’s illegal to call that function before the declaration. If targeting ES2015, a modern runtime will throw an error; however, right now TypeScript is permissive and won’t report this as an error.

function foo() {
    // okay to capture 'a'
    return a3;
  }
  // illegal call 'foo' before 'a' is declared
  // runtimes should throw an error here
  foo();
  let a3:any;
  //---------------------------------
//let declaration
  //let x = 10;
//let x = 20; // error: can't re-declare 'x' in the same scope
//---------------------------------------------------------------------------

//const declarations
 
const numLivesForCat = 9;//variable dec
const kitty = {    //obj 
  name: "Aurora",
  numLives: numLivesForCat,
};

// kitty = {    //tried to reassign but got error by const
//   name: "Aurora",
//   numLives: numLivesForCat,
// };
// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat,
// };
// all "okay"
kitty.name = "Rory";//  update
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
console.log(kitty)
// 
// When you declare a variable with const, you can't reassign a new value to it. However, you can modify the properties of an object declared with const.
