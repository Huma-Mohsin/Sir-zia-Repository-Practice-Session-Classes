let arrayy = ["a", "b", "c", 3, 2, true, ["pak", true], { name: "ali", course: "GenAi" }]; //datatype-(string | number | boolean)[];
//declaration by const
//const arrayy2:number[];//'const' declarations must be initialized.
const arrayy2 = [1, 2, 3, 4, 5];
//arrayy2=[123,456]
//we can add values in it by method only but we donot initialize or reaasign it directly.
let arrayy3 = [1, 2, 3, 4, 5]; // let arrayy3: any[];
////rest parameter always used in a function but call at last in params.
function myfun(a, b, ...restparams) {
    console.log("before return", restparams);
    let myArray1 = [5, 6, 7, 89, 3];
    let newArray3 = [45, ...myArray1]; //creates a new array with the elements of myArray and two additional elements.
    console.log("NewArray3 by spread: ", newArray3);
    return a + b + restparams[3];
    console.log("after return", restparams);
}
console.log(myfun(1, 5, 7, 8, 90, 11, 4));
export {};
