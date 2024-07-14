// Sir Zia code

const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

const enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color[2]; //Not allowed with const enums b/c A const enum member can only be accessed using a string literal.
console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

//Read me

//const enums:-  Const enums can only use constant enum expression

 enum Enum {
    "A member" = 1, //used [] automatically when we accessed by .notation.
    B =   2,
  }
  console.log(Enum["A member"]); // shows value

  console.log(Enum.B);// we can access by key only in square bracket
  console.log(Enum[1]);//error if const enum .
  //-------------------------------------------------------------------
  const enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
   
  let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
  ];
  //--------------------------------------------------------------------

  //Ambient Enums

//  - Declare an enum without assigning values to its members
// - Use the declare keyword
// - Enum members are not defined, only declared
// - Useful for runtime-populated enums or shared enums across files/modules
// - Can be used as a type or imported, but no compile-time checks or auto-completion for members.

// In short, ambient enums are a way to declare an enum's existence without defining its members, allowing for flexibility and modularity in your code.

// colors.ts
declare enum Colored {
    Red,
    Green,
    Blue
  }
  
  
  
  // main.ts
  //import { Colored } from "./colors";
  
  let colored: Color;
  colored = Color.Red; // Error: Enum member is not defined
  
  
//   In this example, we declare an ambient enum Color in the colors.ts file. We then import it in the main.ts file and try to use one of its members, Red. However, since the enum members are not defined, we get an error.
  
//   Note that if we were to define the enum members in the colors.ts file, like this:
  
  
  // colors.ts
  enum Colors {
    Red,
    Green,
    Blue
  }
  
  
//   Then we would be able to use the enum members in the main.ts file without any errors.

// Ambient enums are used to describe the shape of already existing enum types.
declare let z:string; 
console.log(z);

declare enum Enum1 {
  A = 1,
  B,
  C = 2,
}
console.log(Enum1.B);

//-----------------------------------------------------------------------------------

//In modern TypeScript, you may not need an enum when an object with as const 

