//Enums used to define a set of named constants.
//TypeScript provides both numeric and string-based enums.
//by default enum is numeric.

//Numeric enums


enum Direction1 {
  Up, //value 0 ,  bydefault it starts with 0 value.
  Down,
  Left,
  Right,
}

enum Direction {
    Up = 1, //initialized with 1
    Down,   //All of the following members are auto-incremented from that point.
    Left,
    Right,
  }
//0r


  //----------------------------------------------------------------------------------------
  
//Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum: like UserResponse.Yes
  enum UserResponse {
    No = 0,
    Yes = 1,
  }
   
  function respond(recipient: string, message: UserResponse):string{
    return(`Responding to ${recipient} with message ${message === UserResponse.Yes ? 'Yes' : 'No'}`);
}
    
  
   
  
  console.log(respond("Princess Caroline", UserResponse.Yes));//Responding to Princess Caroline with message Yes


  ///////////////////////////////////////////////////////////////////////////////
//Enum Rule:-

  enum E {
    A = getSomeValue(),//the things with specific values are like " members"

    B,  // the things without values are like "computed members".//Error----Enum member must have initializer because the enum member "B" doesn't have a value assigned to it.

  }

//Solution:
enum E1 {
    B,
    A = getSomeValue()
    }
    
    //Or:
    
    enum E2 {
     c=30,
     b, 
     A = getSomeValue()
    }
    
    //Or:
    let ap=getSomeValue()

    enum E3 {

    A = ap,
    B = A+1,
    }


//--------------------------------------------------------------------------------------

// String Enums:-   In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

enum Direction2 {
    'Up key'  = "UP",
    "Down" = "DOWN",
    "Left key" = "LEFT",
    'Right' = "RIGHT",
  }
  // string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize

  // meaning they can be easily converted to and from strings. This makes them useful when working with external data sources, like APIs or databases, that expect string values.

  //Heterogeneous enums - contains different data types in a single named enum.

  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
  }

  //Computed and constant members--Each enum member has a value associated with it which can be either constant or computed. 

  

  enum E {
    X,//An enum member is considered constant if:
     //It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0:
  }
//------------------------------------------------------------------------------------
  //It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.

// All enum members in 'E1' and 'E2' are constant.
 
enum E11 {
  X,
  Y,
  Z,
}
 
enum E21 {
  A = 1,
  B,
  C,
}

// - An enum member is considered constant if:
//     - It's the first member in the enum and has no initializer (default value is 0).
//     - It doesn't have an initializer and the preceding enum member was a numeric constant (its value is the preceding member's value plus one).


//- If an enum member has an initializer, it's considered a computed member, and its value is determined by the initializer expression.
let arr=[1,2,3,4]
enum test {
    
  A = 5, //constant member
  z=arr[2],//3 - computed member
  y=z+1, //4   -constant members

  B = getSomeValue(),  //computed member
  C = A * 2, //constant members
  D,
  }
  
  function getSomeValue(): number {
    return 10; // or any other value
  }

//conditions for constant members:

//1. Literal values:
    enum Color11 { Red = "Hello" } // "Hello" is a constant enum expression
     enum Numbers11 { One = 42 } // 42 is a constant enum expression

//2. References to other constants:
     enum Color12 { Red = "Hello", Blue = Red } // Red is a constant enum expression, so Blue is too.
     enum Numbers12 { One = 42, Two = One } // One is a constant enum expression, so Two is too.

//3. Parentheses:
     enum Color13 { Red = ("Hello") } // ("Hello") is a constant enum expression
     enum Numbers13 { One = (42) } // (42) is a constant enum expression

//4. Simple math:
     enum Numbers14 { Onee = 42, Two = Onee + 1 } // One + 1 is a constant enum expression
    enum Numbers14 { One = 42, Half = One / 2 } // One / 2 is a constant enum expression

// Remember, the key is that the value must be determinable at compile time. If it's not, it's not a constant enum expression!

//If an enum member doesn't meet these rules, it's considered "computed", which means its value is determined at runtime (when the code is actually running).

//---------------------------------------------------------------------

enum FileAccess {
    // constant members
    None,  //This is a constant member with an implied value of 0 (since it's the first member and no value is specified).
 
    Read = 1 << 1,  //This is a constant member with a value of 2 (1 shifted left by 1 bit).

//Read = 1 << 1 is a bitwise operation used to assign a value to the enum member Read.

// 1 << 1 means "shift the number 1 one bit to the left". In binary, this becomes:

// 0001 (1) becomes 0010 (2)                         ......,32,16,8,4,2,1

// So, Read = 1 << 1 assigns the value 2 to the enum member Read.

// This is a common technique used in flag enums to assign powers-of-2 values to enum members, allowing them to be combined using bitwise OR operations.


    Write = 1 << 2,  //This is a constant member with a value of 4 (1 shifted left by 2 bits).

    ReadWrite = Read | Write,// This is a constant member with a value of 6 (the bitwise OR of Read and Write). The | operator performs a bitwise OR operation, which means it compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

    // computed member
    G = "123".length,// This is a computed member because it's initialized with an expression that can't be evaluated at compile time. The value of G is determined at runtime, when the code is executed, and it will be equal to 3 (the length of the string "123").
  }

//   So, in summary:

// - None, Read, Write, and ReadWrite are constant members with values determined at compile time.
// - G is a computed member with a value determined at runtime.
//--------------------------------------------------------------------

// Union enums and enum member types are concepts in TypeScript that allow for more flexibility and expressiveness in defining enumerations.

// Literal Enum Members

// A literal enum member is a constant enum member that has a value that is:

// - Not initialized (i.e., no value is assigned)
// - Initialized with a string literal (e.g., "foo", "bar", "baz")
// - Initialized with a numeric literal (e.g., 1, 100)
// - Initialized with a unary minus applied to a numeric literal (e.g., -1, -100)

// Union Enums

// When all members in an enum have literal enum values, the enum is considered a union enum. Union enums allow you to define a single enum that represents a union of values, rather than a single value.

// For example:

enum Colorw {
Red,
Green,
Blue,
}

// In this example, Color is a union enum because all its members are literal enum members.

//Enum Member Types

// Enum member types are the types of the values that an enum member can have. In union enums, each member can have a different type.

// For example:

enum Status {
Success = 1,
Failed = -1,
Unknown = "unknown",
}

// In this example, Status is a union enum with three members:

// - Success has type number (specifically, the value 1)
// - Failed has type number (specifically, the value -1)
// - Unknown has type string (specifically, the value "unknown")

// Special Semantics

// When all members in an enum have literal enum values, some special semantics come into play:

// - The enum is considered a union enum.
// - Each member can have a different type.
// - You can use the enum members in a more flexible way, such as in union types, type guards, and more.

// Overall, union enums and enum member types provide more flexibility and expressiveness in defining enumerations, allowing you to define more complex and nuanced types in your code.

enum E5 {
  Foo=0,
  Bar,
}
 
function f(x: E5) {
  if (x !== E5.Foo || x !== E5.Bar) {
//This comparison appears to be unintentional because the types 'E.Foo' and 'E.Bar' have no overlap.
    //
  }
}
// the values E.Foo and E.Bar are completely distinct and separate, and there is no commonality or shared characteristics between them. In other words:

// - They are not equal
// - They are not related
// - They do not share any common properties or values
// - They are completely unique and separate entities

// //-------------------------------------------------------------------------

// Reverse mappings!

// In the context of enums, reverse mappings refer to the ability to look up the enum member (key) from its string value (value).

// In other words, instead of using the enum member to get the string value (like Enum[a]), you can use the string value to get the enum member (like Enum["A"]).

// example:

// enum Enum {
// A,
// }

//let a = Enum["A"]; // a now holds the value Enum.A

// This is useful when you have a string value and you want to get the corresponding enum member.

// Note that this only works if the enum members have string values. If the enum members have numeric values, you'll get the numeric value instead of the enum member.

// Reverse mappings are a powerful feature of enums, and they can help you write more expressive and flexible code!

enum Enum {
  A,
}
 
let a = Enum.A;
let nameOfA = Enum[a]; //access the property of a ;
console.log("line 194-", nameOfA);// "A"


//---------------------------------------------------------------------------------
//Sir Zia Code:-

enum Color {
  Red, //starts with 0
  Green, 
  Blue
};
var c: Color = Color.Green;    // 1   here : Color consider as data type


enum Color1 {Red = 1, Green, Blue};

var colorName: string = Color1[2];//acccess member on behalf of value
console.log(colorName);//  green

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex:number = Color2["Blue"];
console.log(colorIndex);//4