
//In TypeScript, functions are blocks of code that can be called multiple times from different parts of your program.

//Note: All parameters are required

//1-Named function:

//A named function is a function declared with the function keyword, followed by the function name (add in this case). It takes two required parameters, x and y, both of type number, and returns a value of type number.

function add(x: number, y: number): number {
    return x+y;
}
//invoke
console.log(add(4,5))//9

//2-Anonymous function

//An anonymous function is a function declared without a name, using the function keyword. It is assigned to a variable (myAdd1 in this case). It takes two required parameters, x and y, both of type number, and returns a value of type number.

let myAdd1 = function(x: number, y: number): number { 
				return x+y; 
};
//invoke
console.log(myAdd1(7,8))


//3-Anonymous function with explict type of a function itself.

//This is similar to the anonymous function, but with an explicit type annotation. The type annotation specifies that the function takes two parameters of type number and returns a value of type number i.e : (x:number, y:number)=>number

let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};

//4-type names dont matter.

//This example shows that the parameter names in the type annotation (baseValue and increment) do not need to match the parameter names in the function implementation (x and y).

let myAdd3 = 	function(x:any, y:any):any{ 
  let a=x+y;
  console.log(typeof a); //string when number+string = string returned.
return a; 

				}
        myAdd3(1,"hello")
        //console.log("line 42-",typeof myAdd3);//line 42- function
        //console.log(myAdd3(1,"Hello"));//1Hello
            		// let results=	(myAdd3);
                // console.log(results)	;						
//5-Lambda functions- Arrow function-Anonymous function

//A lambda function is a concise way to define a small, single-expression function. It takes two required parameters, a and b, both of type number, and returns a value of type number.
//let variablefun=()=>{}
let myAdd4: (a: number, b: number) => number = (a : number, b : number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

//---------------------------------------------------------------------

//6- "type constructor" or a "type factory" function.
type GreetFunction = (a: string) => void  
/*
- Defines a type alias , GreetFunction , for a function that:
- Takes a single parameter a of type string
- Returns no value (void)
*/
function greeter(fn: GreetFunction) {    //takes a single parameter function i.e fn of type GreetFunction

    fn ("Hello World") //here we invoke a call back function
greet1("pakistan");
    //A callback function is a function that is passed as an argument to another function, and is invoked (or "called back") inside the body of that function.
  }
  
  greeter((a:string)=>console.log(a)); // we are passing the greet function itself as an argument to greeter, not the result of calling greet(). This is why we don't use parentheses () with greet when passing it as an argument.

  // Passes the greet function itself as an argument to greeter (not the result of calling greet())
  // Note: no parentheses () are used when passing greet as an argument


  //--making a function that fits to a type alias.

  //If you want to define a function that matches the GreetFunction type alias, you should use a different name
function greet1(a: string): void {
  console.log(a);// the void return type only means that the function doesn't return a value, but it can still produce side effects, like logging to the console.
}
//pakistan

//Then, you can pass this function to the greeter function like this:
 
//output 
//Hello World
//pakistan

//or

 function greete1r(a: string) : string  { 
//     This function takes a GreetFunction as a parameter, which means it can accept any function that matches the GreetFunction type.
	return a;
}
console.log(greete1r("Hello , i am named function"));  //hello, i am named function 


										
						