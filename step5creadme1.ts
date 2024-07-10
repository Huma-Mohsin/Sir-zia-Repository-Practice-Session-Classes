// TypeScript provides a concept of Freshness (also called strict object literal checking) to make it easier to type check object literals that would otherwise be structurally type compatible.


function logName(something: { name: string }) // when we define a function parameter with a type annotation, like something: { name: string }, it means that the function expects an object with a name property as an argument.
{
    console.log(something.name);//The function logs the value of the name property to the console.
}

var person = { name: 'matt', job: 'being awesome' };//creates an object
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: `I don't have a name property` };

console.log(logName(person)) ; // okay-matt -undefined
console.log(logName(animal)); // okay-cow
//console.log(logName(random)); // Error: property `name` is missing

// However, structural typing has a weakness in that it allows you to misleadingly think that something accepts more data than it actually does. 


//This is demonstrated in the following code which TypeScript will error on as shown:
//-----------------------------second code enables TS'Freshness.

function logName1(something: { name: string }) {
    console.log(something.name);
}

console.log(logName1({ name: 'matt' })); // okay- matt

console.log(logName1({ name: 'matt', job: 'being awesome' })); // Error: object literals must only specify known properties. `job` is excessive here.

let something: { name: string }; //object type

something=person; //Stale object example


// Note that this error only happens on object literals. Without this error one might look at the call logName({ name: 'matt', job: 'being awesome' }) and think that logName would do something useful with job where as in reality it will completely ignore it.

//Another big use case is with interfaces that have optional members, without such object literal checking, a typo would type check just fine. This is demonstrated below:


function logIfHasName(something: { name?: string }) {
    if (something.name) {
        console.log(something.name);
    }
}
var person = { name: 'matt23', job: 'being awesome' };
var animal = { name: 'cow23', diet: 'vegan, but has milk of own species' };

console.log(logIfHasName(person)); // okay-matt23,undefined( doesn't have that property.)
 console.log(logIfHasName(animal)); // okay-cow23
logIfHasName({neme: 'I just misspelled name to neme'}); // Error: object literals must only specify known properties. `neme` is excessive here.

// The reason why only object literals are type checked this way is because in this case additional properties that aren't actually used is almost always a typo or a misunderstanding of the API.
//-----------------------------------------------------------------------------------------

//Allowing extra properties

// A type can include an index signature to explicitly indicate that excess properties are permitted:

let z:string[]=["lahore","islamabad"];
let y:any=["ali","ahmed"];
let x1:unknown=[1,2,3,4]


//-------------------------------------------------------------------------

var x: { foo: number, [x: string]: any};
x = { foo: 1, city:["karachi" ]};  // Ok, `baz` matched by index signature

//---------------------------------------------------------------------------------------

// Problem:

// In React, when updating the state of a component using this.setState(), you often only need to update a few properties, not all of them. However, TypeScript requires you to specify all properties, even if they haven't changed, to ensure type safety.

//In React, a component is a piece of code that represents a UI element, such as a button, form, or dialog 

//In TypeScript (TS), setState is a method used in React components to update the state of a component. It is a part of the React.Component class and is used to modify the state of a component by merging the new state with the existing state.


// Example:

// Assuming you have a component with an interface State that has two properties, foo and bar, both of type string:

interface State {
  foo: string;
  bar: string;
}

//You want to update only the foo property:

console.log(this.setState({ foo: "Hello" })); // Error: missing property bar

// TypeScript complains because you haven't specified the bar property, even though it hasn't changed.

// Solution:

//Mark all members of the State interface as optional by adding a ? after each property:

interface State1 {
  foo1?: string;
  bar1?: string;
}

//Now, when you update only the foo property, it works fine:

console.log(this.setState({ foo: "Hello" })); // Yay works fine!

// Freshness Protection:

// Thanks to the "freshness" feature, TypeScript still protects you from typos and incorrect types:

// - If you try to update a non-existent property, like foos, you'll get an error:

//this.setState({ foos: "Hello" }); // Error: Objects may only specify known properties

// - If you try to assign an incorrect type, like a number to a string property, you'll also get an error:

// this.setState({ foo: 123 }); // Error: Cannot assign number to a string

// This way, you get the flexibility to update only the necessary properties while still maintaining type safety and protection against typos and errors.

_______________________________________________________________________________________________

