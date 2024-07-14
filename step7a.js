//Enums used to define a set of named constants.
//TypeScript provides both numeric and string-based enums.
//by default enum is numeric.
//Numeric enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//0r
//----------------------------------------------------------------------------------------
//Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum: like UserResponse.Yes
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    return (`Responding to ${recipient} with message ${message === UserResponse.Yes ? 'Yes' : 'No'}`);
}
console.log(respond("Princess Caroline", UserResponse.Yes)); //Responding to Princess Caroline with message Yes
///////////////////////////////////////////////////////////////////////////////
//Enum Rule:-
var E;
(function (E) {
    E[E["A"] = getSomeValue()] = "A";
    E[E["B"] = void 0] = "B";
})(E || (E = {}));
//Solution:
var E1;
(function (E1) {
    E1[E1["B"] = 0] = "B";
    E1[E1["A"] = getSomeValue()] = "A";
})(E1 || (E1 = {}));
//Or:
var E2;
(function (E2) {
    E2[E2["c"] = 30] = "c";
    E2[E2["b"] = 31] = "b";
    E2[E2["A"] = getSomeValue()] = "A";
})(E2 || (E2 = {}));
//Or:
let ap = getSomeValue();
var E3;
(function (E3) {
    E3[E3["A"] = ap] = "A";
    E3[E3["B"] = E3.A + 1] = "B";
})(E3 || (E3 = {}));
//--------------------------------------------------------------------------------------
// String Enums:-   In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
var Direction2;
(function (Direction2) {
    Direction2["Up key"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left key"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// string enums don’t have auto-incrementing behavior, string enums have the benefit that they “serialize
// meaning they can be easily converted to and from strings. This makes them useful when working with external data sources, like APIs or databases, that expect string values.
//Heterogeneous enums - contains different data types in a single named enum.
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
//Computed and constant members--Each enum member has a value associated with it which can be either constant or computed. 
(function (E) {
    E[E["X"] = 0] = "X";
    //It is the first member in the enum and it has no initializer, in which case it’s assigned the value 0:
})(E || (E = {}));
//------------------------------------------------------------------------------------
//It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.
// All enum members in 'E1' and 'E2' are constant.
var E11;
(function (E11) {
    E11[E11["X"] = 0] = "X";
    E11[E11["Y"] = 1] = "Y";
    E11[E11["Z"] = 2] = "Z";
})(E11 || (E11 = {}));
var E21;
(function (E21) {
    E21[E21["A"] = 1] = "A";
    E21[E21["B"] = 2] = "B";
    E21[E21["C"] = 3] = "C";
})(E21 || (E21 = {}));
// - An enum member is considered constant if:
//     - It's the first member in the enum and has no initializer (default value is 0).
//     - It doesn't have an initializer and the preceding enum member was a numeric constant (its value is the preceding member's value plus one).
//- If an enum member has an initializer, it's considered a computed member, and its value is determined by the initializer expression.
let arr = [1, 2, 3, 4];
var test;
(function (test) {
    test[test["A"] = 5] = "A";
    test[test["z"] = arr[2]] = "z";
    test[test["y"] = test.z + 1] = "y";
    test[test["B"] = getSomeValue()] = "B";
    test[test["C"] = 10] = "C";
    test[test["D"] = 11] = "D";
})(test || (test = {}));
function getSomeValue() {
    return 10; // or any other value
}
//conditions for constant members:
//1. Literal values:
var Color11;
(function (Color11) {
    Color11["Red"] = "Hello";
})(Color11 || (Color11 = {})); // "Hello" is a constant enum expression
var Numbers11;
(function (Numbers11) {
    Numbers11[Numbers11["One"] = 42] = "One";
})(Numbers11 || (Numbers11 = {})); // 42 is a constant enum expression
//2. References to other constants:
var Color12;
(function (Color12) {
    Color12["Red"] = "Hello";
    Color12["Blue"] = "Hello";
})(Color12 || (Color12 = {})); // Red is a constant enum expression, so Blue is too.
var Numbers12;
(function (Numbers12) {
    Numbers12[Numbers12["One"] = 42] = "One";
    Numbers12[Numbers12["Two"] = 42] = "Two";
})(Numbers12 || (Numbers12 = {})); // One is a constant enum expression, so Two is too.
//3. Parentheses:
var Color13;
(function (Color13) {
    Color13["Red"] = "Hello";
})(Color13 || (Color13 = {})); // ("Hello") is a constant enum expression
var Numbers13;
(function (Numbers13) {
    Numbers13[Numbers13["One"] = 42] = "One";
})(Numbers13 || (Numbers13 = {})); // (42) is a constant enum expression
//4. Simple math:
var Numbers14;
(function (Numbers14) {
    Numbers14[Numbers14["Onee"] = 42] = "Onee";
    Numbers14[Numbers14["Two"] = 43] = "Two";
})(Numbers14 || (Numbers14 = {})); // One + 1 is a constant enum expression
(function (Numbers14) {
    Numbers14[Numbers14["One"] = 42] = "One";
    Numbers14[Numbers14["Half"] = 21] = "Half";
})(Numbers14 || (Numbers14 = {})); // One / 2 is a constant enum expression
// Remember, the key is that the value must be determinable at compile time. If it's not, it's not a constant enum expression!
//If an enum member doesn't meet these rules, it's considered "computed", which means its value is determined at runtime (when the code is actually running).
//---------------------------------------------------------------------
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    //Read = 1 << 1 is a bitwise operation used to assign a value to the enum member Read.
    // 1 << 1 means "shift the number 1 one bit to the left". In binary, this becomes:
    // 0001 (1) becomes 0010 (2)                         ......,32,16,8,4,2,1
    // So, Read = 1 << 1 assigns the value 2 to the enum member Read.
    // This is a common technique used in flag enums to assign powers-of-2 values to enum members, allowing them to be combined using bitwise OR operations.
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
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
var Colorw;
(function (Colorw) {
    Colorw[Colorw["Red"] = 0] = "Red";
    Colorw[Colorw["Green"] = 1] = "Green";
    Colorw[Colorw["Blue"] = 2] = "Blue";
})(Colorw || (Colorw = {}));
// In this example, Color is a union enum because all its members are literal enum members.
//Enum Member Types
// Enum member types are the types of the values that an enum member can have. In union enums, each member can have a different type.
// For example:
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failed"] = -1] = "Failed";
    Status["Unknown"] = "unknown";
})(Status || (Status = {}));
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
var E5;
(function (E5) {
    E5[E5["Foo"] = 0] = "Foo";
    E5[E5["Bar"] = 1] = "Bar";
})(E5 || (E5 = {}));
function f(x) {
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
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
let a = Enum.A;
let nameOfA = Enum[a]; //access the property of a ;
console.log("line 194-", nameOfA); // "A"
//---------------------------------------------------------------------------------
//Sir Zia Code:-
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; // 1   here : Color consider as data type
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2]; //acccess member on behalf of value
console.log(colorName); //  green
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex); //4
export {};
