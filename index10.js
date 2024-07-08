let ball = { diameter: 10, material: "plastic" }; //creates a value of type Ball with a diameter of 10.
let sphere = { diameter: 20, color: "red", material: "plastic" };
//sphere = ball;  // assigns the value of type Ball to the variable sphere of type Sphere. This is allowed because they have the same structure (both have a diameter property).
ball = sphere; //same as above
console.log(ball); //{ diameter: 20, color: 'red' }
//sphere=ball;
//---------------------------------------------------
var a = { foo: 4 }; //line-a
let a1 = { foo: 1, baz: 2 }; // line b
export {};
//a1 = a; // line c
// Choose any one.
// 1). Error line a
// 2). Error line b
// 3). Error line c
// 4). No Error.
