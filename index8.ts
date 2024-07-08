let visitplace = ["Taj Mehal","Great Wall of China","Colosseum","Chichen Itza","Machu Picchu"];
//console.log("Original Order :", visitplace);
//console.log("Reverse Order : ",visitplace.reverse());
console.log("Alphabatical Order :",visitplace.sort())
//console.log("Reverse ALphabetical Order : ",visitplace.reverse());

let numbers=[1,22,93,14,5,31]
console.log(numbers.sort((a,b)=>a-b));


//let newarr3 = arr2.map(country => country.join(" is a great country"));

//console.log(newarr3);

//You are using the map() method to create a new array (newarr3) from the existing array (arr2). The map() method applies a transformation function to each element of the original array and returns a new array with the transformed elements.

// In your case, the transformation function is country => country.join(" is a great country"). This function takes each element of the original array (country) and joins it into a string with the phrase " is a great country".


let array2 = ["USA", "Washington", "English"];
let newarray3 = array2.map(country => {
  return country + " is a great country";
});
console.log(newarray3);//[
//     'USA is a great country',
//     'Washington is a great country',
//     'English is a great country'
//   ]

//------------------------------

let arr2 = ["USA", "Washington", "English"];
let newarr3 = arr2.join(", ") + " are great countries";
console.log(newarr3);//USA, Washington, English are great countries

