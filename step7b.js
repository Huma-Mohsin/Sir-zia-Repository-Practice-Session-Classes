// Sir Zia code
; //starts with 0
var c = 1 /* Color.Green */;
;
var colorName = Color[2]; //Not allowed with const enums b/c A const enum member can only be accessed using a string literal.
console.log(colorName);
; //can assign values to all
var colorIndex = 4 /* Color2["Blue"] */;
console.log(colorIndex);
//Read me
//const enums:-  Const enums can only use constant enum expression
var Enum;
(function (Enum) {
    Enum[Enum["A member"] = 1] = "A member";
    Enum[Enum["B"] = 2] = "B";
})(Enum || (Enum = {}));
console.log(Enum["A member"]); // shows value
console.log(Enum.B); // we can access by key only in square bracket
console.log(Enum[1]); //error if const enum .
let directions = [
    0 /* Direction.Up */,
    1 /* Direction.Down */,
    2 /* Direction.Left */,
    3 /* Direction.Right */,
];
// main.ts
//import { Colored } from "./colors";
let colored;
colored = 0 /* Color.Red */; // Error: Enum member is not defined
//   In this example, we declare an ambient enum Color in the colors.ts file. We then import it in the main.ts file and try to use one of its members, Red. However, since the enum members are not defined, we get an error.
//   Note that if we were to define the enum members in the colors.ts file, like this:
// colors.ts
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
console.log(z);
console.log(Enum1.B);
export {};
//-----------------------------------------------------------------------------------
//In modern TypeScript, you may not need an enum when an object with as const 
