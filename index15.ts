
interface DescribableFunction  {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    return someArg>8;//true
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);

//data type called call signatures
type NameofFun={
    x:string;
    y:(b:string)=>boolean
}

function abc(fn:NameofFun){

}

// construct signatures.
interface SomeObject {
    name: string;
  }
  
  class SomeClass implements SomeObject {
    name: string;
    constructor(s: string) {
      this.name = s;
    }
  }
  
  type SomeConstructor = { new (s: string): SomeObject; };
  
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }
  
  console.log(fn(SomeClass)); // Now it works!
  //SomeClass { name: 'hello' }

  //