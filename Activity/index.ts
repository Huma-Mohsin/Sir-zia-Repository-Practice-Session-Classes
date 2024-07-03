//Activity-1
//how to run this folder in terminal???
//Ans---- cd foldername i.e cd Activity
// come outside from this folder....
//Ans----  cd ..(cd space double dot)
//------------------------------------


//task-1
let arr=[1,2,3]
//how to add elements ????
// let arr1=arr.push(4,5,6)//add multiple values.
// //shows its output as a total length only after updated values.
// console.log(arr1);//6
// 
console.log("line16-",arr);//[ 1, 2, 3, 4, 5, 6 ]
//line16- [ 1, 2, 3 ]
//------------------------------------------------------------

//calling function:-

//custom method or function to add elements w/o using push method.
let newlength= custom_Push(arr,4,5,6);
console.log("line-19",newlength);//line-19------ 6
console.log("Final Array",arr);//Final Array [ 1, 2, 3, 4, 5, 6 ]


//--------------------------


let newlength1= custom_Push(arr,7,91,63,54);
console.log("line-29",newlength1);//line-29------ line-19 10
// console.log("Final Array",arr);//Final Array ---------------
//Final Array [
//     1, 2,  3,  4,  5,
//     6, 7, 91, 63, 54
//   ]

//work same as push method.
//here we call a function , we can call anywhere before or after declaring a function. 
//------------------------------------------------------------------

//function definition
function custom_Push(arr:number[],...item:number[]):number{
    //we can use rest parameter
    //we can access elements of item [] by using for loop,
    //Add each new item to the end of an array.
    for (let index = 0; index < item.length; index++) {
        arr[arr.length]=item[index];
        
    }

return arr.length;
} 