let arr1; // its data type???----w/o assigning values.
let arr2 = [1, 2, 3, 4]; //number[] by inferring
let tuple = ["pakistan", 45]; //: (string | number)[] by inferring.
let tuple1; //declaration
tuple1 = [true, 23, "china"]; //ts doesnot infer tuple, we need to define tuple explicitly.//always strongly type.  //initialization seperately here by let only.
// const tuple5:[boolean,number,string]//declaration
// tuple5=[true,23,"china"];//ts doesnot infer tuple, we need to define tuple explicitly.//always strongly type.  //initialization seperately here by const but we get an error with const.
let tuple2 = ["pakistan", 45]; //this array behaves as read only, we donot change its value or update etc.
export {};
//line 5--- shows type casting here .
