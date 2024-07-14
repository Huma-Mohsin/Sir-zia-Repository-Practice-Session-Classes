// Enum:-
//An enum (short for enumeration) is a user-defined data type that allows you to define a set of named constants. It's a way to give a name to a group of related values, making your code more readable and maintainable.
//syntax : just like interface 
var enum_name;
(function (enum_name) {
})(enum_name || (enum_name = {}));
// example of numeric enum, by default enum are numeric means their values are numeric however members are string.
var Numeric_enum;
(function (Numeric_enum) {
    Numeric_enum[Numeric_enum["red"] = 0] = "red";
    Numeric_enum[Numeric_enum["green"] = 1] = "green";
    Numeric_enum[Numeric_enum["blue"] = 2] = "blue";
})(Numeric_enum || (Numeric_enum = {}));
//String Enum
var String_enum;
(function (String_enum) {
    String_enum["RED"] = "red";
    String_enum["PURPLE"] = "purple";
})(String_enum || (String_enum = {}));
//change value explicitly as;
var testing;
(function (testing) {
    testing[testing["red"] = 8] = "red";
    testing[testing["blue"] = 9] = "blue";
    testing[testing["white"] = 10] = "white";
    testing["green"] = "Green";
    testing["black"] = "abc";
    testing["brown"] = "brown";
    testing[testing["orange"] = 18] = "orange";
    testing[testing["peach"] = 19] = "peach";
})(testing || (testing = {}));
//Accessing value of enum:
//enum_name.member;
console.log(Numeric_enum.green); //give its values i.e  1
console.log(String_enum.PURPLE); //purple
console.log(testing.blue); //9
console.log(testing.green); //green
//find its member by value
console.log(Numeric_enum[0]); //red
console.log(Numeric_enum[4]); //undefined
console.log(String_enum["PURPLE"]); //purple
//console.log(String_enum["yellow"])
console.log(testing[1]); //undefined
console.log(testing[8]); ///red
console.log(testing[5]); //undefined
//Enum is a class .
//------------------------Enum Members-------------------------
// // - Constant members:
// - First member with no initializer (gets value 0)
// - Member with no initializer, preceded by a numeric constant (gets value +1)
// - Their value is determined at compile time.
// - They are initialized with a constant enum expression (e.g., a literal value, a reference to another constant member, or a simple math operation).
// - Their value is known before the code is even run.
// - Example: enum Color { Red = "Hello", Blue = Red }
//Computed Members:
// - Their value is determined at runtime (when the code is actually running).
// - They are initialized with an expression that can't be evaluated at compile time (e.g., a function call, a variable, or a complex calculation).
// - Their value is not known until the code is executed.
// - Example: enum Color { Red = getFavoriteColor() }
// In summary:
// - Constant members have values determined at compile time, while computed members have values determined at runtime.
// - Constant members are initialized with constant enum expressions, while computed members are initialized with more complex expressions.
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 10] = "B";
    E[E["C"] = 11] = "C";
    E[E["D"] = 20] = "D";
    E[E["E"] = 21] = "E";
    E[E["F"] = getSomeValue()] = "F";
})(E || (E = {}));
function getSomeValue() {
    return 100;
}
console.log(E.A); //0
console.log(E.B); //10
console.log(E.C); //11
console.log(E.D); //20
console.log(E.E); //21
console.log(E.F); //100
export {};
