// Enum:-
//An enum (short for enumeration) is a user-defined data type that allows you to define a set of named constants. It's a way to give a name to a group of related values, making your code more readable and maintainable.
  
 //syntax : just like interface 
 enum enum_name{

}

// example of numeric enum, by default enum are numeric means their values are numeric however members are string.

enum Numeric_enum{ 
    red , //0 called member of enum.By default its value starts from 0 and automatically increment by 1 as we go down to next member.

     green,  //value=1
     blue
}

//String Enum

enum String_enum{
    RED ="red",
    PURPLE="purple"
}

//change value explicitly as;
enum testing{
    red=8,//explicitly-
    blue,
    white,
    
    green="Green",
    black="abc",
    brown="brown",

    orange=18,
    peach,
   
}

//Accessing value of enum:
//enum_name.member;

console.log(Numeric_enum.green); //give its values i.e  1
console.log(String_enum.PURPLE); //purple
console.log(testing.blue);  //9
console.log(testing.green);  //green

//find its member by value
console.log(Numeric_enum[0]);//red
console.log(Numeric_enum[4]);//undefined
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



enum E { 
     A, // constant member
     B = 10, // constant member 
     C, // constant member 
     D = 20, // constant member 
     E, // constant member 
     F= getSomeValue(),  //computed member and its value is determined by the getSomeValue() function. This means that F's value will be whatever value is returned by the getSomeValue() function.
     }
    
     function getSomeValue():number{
        return 100;
     }
     console.log(E.A);//0
     console.log(E.B);//10
     console.log(E.C);//11
     console.log(E.D);//20
     console.log(E.E);//21
     console.log(E.F);//100
