// let obj=[]; 
// let obj1:string[]  ;


//--------------------------------------

// let obj2={

// }          //for making an object


// let obj3:{name:string,age:number}; //declaration---  
// //for making an object.

// //initialization
// obj3={
//     name:`sana`,//in backticks behaves as a string.
//     age:  28

// }


interface Details {
name:string,
age:number,
course:string,
isEnrolled:boolean,

}

interface Details{
    contact:number,
}

let obj3 :Details =  {
    name:`sana`,//in backticks behaves as a string.
    age:  28, 
    course:"Ai",
    isEnrolled:true,
    contact:1234



} 
let obj4 :Details =  {
    name:`saira`,//in backticks behaves as a string.
    age:  38, 
    course:"Ai",
    isEnrolled:false,
    contact:4567


} 


//Acccess its properties.
//2 ways to acccess properties.
//1- dot notation
//2- by using square bracket not array.

console.log(obj3.name); //Sana
console.log(obj3["age"]);//28

//--------------------------------------------------------------

interface Newobject{
    name:string,
    age:number
}

let newobj:Newobject[]=[{name:"Saad",age:15},

{name:"Sarmad",age:25} ]
//--------------------------------------
type Name=string;

type Name1=[string,boolean];//Array or tuple type by using custom type.

interface Person2{
    name:Name, //we use custom type in interface too.
    city:string
}

type Person = {
    name: Name;  //custom type-data type by using type Alias.
    age: number;
  };
  
  function greet(person: Person) {
    return "Hello " + person.name;
  }
  
//--------------------------------------------------

// Define a type alias for Address
interface Address  {
    street: string;
    city: string;
    postalCode: string;
  };
  
  type Names=string
//interface Name2{



  // Define an interface that includes the Address type alias
  interface User {
    name: Names;//custom type 
    age: number;
    address: Address; //we are using interface here in address property.
    //provides you a shortcut 
  }
  
  // Example usage
  const user: User = {
    "name": 'Alice',
    age: 25,
    address: {
      street: "123 Main St",
      city: "Springfield",
      postalCode: "12345"
    }
  };
  
  console.log(user);// output  {
//     name: 'Alice',
//     age: 25,
//     address: { street: '123 Main St', city: 'Springfield', postalCode: '12345' }        
//   }
//----------------------------------------------------
//difference b/w json and js object
//Ans - in json we donot pass methods or functions.
//Ans - json must  has keys and values  in double quote always. 
//example tsconfig.json, package.json etc.