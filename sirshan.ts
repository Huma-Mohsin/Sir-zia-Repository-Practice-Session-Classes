let message="hello world"; //datatype: infer string
//message=6;//shows error

let message1;  // infer any datatype w/o passing value and it remains same after passing a value 

message1="Hello world"; // any
message1=6;//any
//---------------------------------------------------
let message2:string;//strongly type
message2="Pakistan";
//message2=7; //update-reassign// in js, it is acceptable and not considered an error b/c there is no type in js so value updated from pak to 7 however ts shows an error.
message2="hello";// reassigned
console.log(message2);
//---------------------------------------------
let message5:string|number = "hello world";
message5= 6;//narrowing by itself.
//message5=true; 
// A.string
// B.number
// C.bolean
// D.object
//--------------------------------------------

let newAge:string|number;
newAge="pak"
if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}



