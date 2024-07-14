;
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 8; //true
}
myFunc.description = "default description";
doSomething(myFunc);
function abc(fn) {
}
class SomeClass {
    name;
    constructor(s) {
        this.name = s;
    }
}
function fn(ctor) {
    return new ctor("hello");
}
console.log(fn(SomeClass)); // Now it works!
export {};
//SomeClass { name: 'hello' }
//
