//Repo Code:-  //concept of fresh objects and stale objects

// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
   
    
}

interface Sphere {
    diameter: number;
    color:string,
}//In a structural type system, the interfaces Ball and Sphere are considered equivalent because they have the same properties (in this case, just diameter: number;).

  
  let ball:Ball = { diameter: 10 };//creates a value of type Ball with a diameter of 10.
  let sphere:Sphere = { diameter: 20 ,color:"red" };
  
  //sphere = ball;  // assigns the value of type Ball to the variable sphere of type Sphere. This is allowed because they have the same structure (both have a diameter property).
  
  ball = sphere;//same as above
  console.log(ball);
  //ball={ diameter: 10,radius:2}//error
  ball={ diameter: 10}//
  //---------------------------------------------------------------


  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
  
  interface Tube {//Think of a physical tube, like a pipe or a cylinder. It has a diameter (the distance across the tube) and a length (how long it is).
    //making it a superset of the Ball and Sphere interfaces, which only have a diameter property.
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };// create a value tube of type Tube 
  
  tube = ball;  //Error-Property 'length' is missing in type 'Ball' but required in type 'Tube'
  ball = tube;  //assign tube to ball because all the members of Ball (diameter) are present in Tube

  //In summary, Tube is a superset of Ball and Sphere because it contains all their members, so a Tube can be assigned to a Ball or Sphere, but not the other way around because Ball and Sphere lack the length property present in Tube.
  
  // Because a ball does not have a length, then it cannot be
  // assigned to the tube variable. However, all of the members
  // of Ball are inside tube, and so it can be assigned.
  
  // TypeScript is comparing each member in the type against
  // each other to verify their equality.

//===================================================



// Now lets do it Case By Case


//Case when "FRESH"" object literal are assigned to a variable 
//------------------------------------------------------------
//Rule: 1---When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
// "non-empty target type" refers to a type that has at least one property or element. In other words, it's a type that is not empty or null.


//2---------it is an error for the object literal to specify properties that don't exist in the target type.
// //means:
// when you assign an object literal to a variable or property with a specific type (the "target type"), it's an error if the object literal contains properties that are not defined in the target type.

//Example:

// - The target type defines a set of properties (e.g., { name: string, id: number })
// - The object literal being assigned must only contain properties that are defined in the target type
// - If the object literal contains extra properties not defined in the target type, it's an error

// This rule helps prevent mistakes like typos or unexpected properties, ensuring that the object literal matches the expected shape defined by the target type.

// Example:

// let myType: { name: string, id: number } = { name: "Zia", id: 1, age: 30 }; // Error! "age" is not in the target type

// In this example, the target type only defines name and id properties, but the object literal tries to assign an extra age property, which is not allowed.

//An object literal is a way to create an object in JavaScript and TypeScript by defining its properties and values directly in the code.


//3---------The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 
//means:
//  TypeScript enforces strict rules to ensure that the object literal's properties match the target type, preventing errors and unexpected behavior.


// let myType: {
//   name: string;
//   id: number;
//   //age?:number
// } = { name: "Zia", id: 1  };//"Fresh object literal" means an object created directly in the code, like { name: "Zia", id: 1 }.
//// - "Target type"refers to the name of the variable or parameter being assigned to, like myType.

//Case 1
myType = { id: 2, name: "Tom" }; //reassigned myType

// In Case 1, myType has a specific type with properties name and id. When you try to assign a new object literal { id: 2, name: "Tom" } to myType, it's allowed because the properties match the target type.

// Here's a breakdown:

// - "Fresh object literal" means an object created directly in the code, like { name: "Zia", id: 1 }.
// - "Target type" refers to the type of the variable or parameter being assigned to, like myType.
// - The rule states that if you assign a fresh object literal to a variable or parameter with a specific type (non-empty target type), it's an error if the object literal has properties that don't exist in the target type.

// In Case 1, myType has a specific type with properties name and id. When you try to assign a new object literal { id: 2, name: "Tom" } to myType, it's allowed because the properties match the target type.

// However, if you tried to assign an object literal with extra or misspelled properties, like { id: 2, name: "Tom", age: 30 } or { id: 2, nam: "Tom" }, it would be an error because the properties don't exactly match the target type.

//-----------------------------------------------------------------------------------------------------------
//Case 2a
myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property


// In this case, the assignment myType = { id: 2, name_person: "Tom" }; would result in an error because:

// - The property name_person is not defined in the original type of myType (which only has name and id properties).
// - The property name is missing from the new object literal.

//-----------------------------------------------------------------------------------------------------------

//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string


// An index signature to allow excess properties in an object.

// - The type definition var x: { id: number, [x: string]: any }; includes an index signature, which is the part [x: string]: any.

// - The index signature indicates that the object can have additional properties beyond the explicitly defined ones (id in this case).

// - The string type in the index signature means that the additional properties must have string keys (e.g., "fullname").

// - The any type in the index signature means that the values of these additional properties can be of any type.


// By including this index signature, you're explicitly telling TypeScript that objects of type x can have extra properties with string keys, and their values can be of any type.

x = { id: 1, 123: "Karachi" };  // Ok, `fullname` matched by index signature


// In the assignment x = { id: 1, fullname: "Zia" };, the property fullname is considered an excess property, but it's allowed because of the index signature. The type system checks that the key "fullname" is a string, and the value "Zia" is of type any, which matches the index signature.

//----------------------------------------------------------------------------------------------------------

//Case 3
myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property



//=================================================


//Case when STALE object literal are assigned to a variable 
 let myType = { name: "Zia", id: 1  };
let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2 ,  name_person: "Tom" };
//Case 2a
myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 

//-----------------------------------------------------------------------------------------------------

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

//index signature=[x: string]: any

var x1: { id: number,[x: string]: any ,firstName:string};
//Note now 'x' can have any name, just that the property should be of type string
x1={id:34,  firstName :"Khan", indexSignaturevalue:"Khalid",}

var y = { id:2, firstName: "Zia" };

x1 = y;// Ok, `fullname` matched by index signature
y=x1;

//-------------------------------------------------
//let myType = { name: "Zia", id: 1  };
var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object




//--------------------------------------------------------------------------------------------------------------
//declaration -fresh object's mechanism:

var x2: { foo: number }; //the type of x is defined as an object with a single property foo of type number.
//initialization
x2 = { foo: 1, baz: 2 };  // Error, excess property `baz`

//When assigning an object literal to x, TypeScript checks that the object conforms to the defined type. Since the object literal has an extra property baz that's not defined in the type, TypeScript throws an error.


//---------------------------------------------------------------------------------------------------------
var y1: { foo: number, bar?: number };
y1 = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`


// Similarly, the type of y is defined as an object with a required property foo of type number and an optional property bar of type number. When assigning an object literal to y, TypeScript checks that the object conforms to the defined type. Since the object literal has an extra property baz that's not defined in the type, TypeScript throws an error.

//_____________________________________________________________________________________________________

var a4= { foo:7,baz:5 };

 //data structure
var a = { foo:2, baz: 4 }; 
//object
// 
a = a4;//No Error---//atleast one variable containing an object  must be initialize before assigning.

a4=a;

// Here, a new variable a1 is defined with an object literal that has an extra property baz. However, when assigning a1 to a, TypeScript doesn't throw an error because the type of a is not explicitly defined as "exact" (i.e., no excess properties allowed). The assignment is allowed, and a will have the shape of the assigned object, including the extra property baz.


//-----------------------------------------------------------------------------------------------
var z: { foo: number, bar?: number };//variable z

// This line defines a variable z with a type that has:
// * A required property foo of type number
// * An optional property bar of type number (the ? makes it optional)
var z1 = { foo: 1, baz: 2 };//object z1
// This line defines a new variable z1 with an object literal that has:
// * A property foo with value 1
// * A property baz with value 2 ( notice this property is not defined in the type of z )

z = z1;//No Error

// - When we assign z1 to z (with the statement z = z1;), TypeScript doesn't throw an error.

// - This is because TypeScript only checks if the shape of z1 (its properties) matches the shape of z. Since z1 has a foo property (which is required for z) and an extra property baz (which is not defined for z), the assignment is allowed.
// - After the assignment, z will have the properties foo and baz, even though its original type definition only specified foo and bar?.

//---------------------------------------------------------------------------------------------




  
  