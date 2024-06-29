import inquirer from "inquirer";
let answers = await inquirer.prompt({
    //await is call back function,inquirer is an inst. of class we can call methos .prompt by it.
    name: "age",
    type: "number",
    message: "Enter your Age:"
});
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
//Read :-
//Using Inquirer Package
// The latest version (9+) of Inquirer has start using Native ECMA Script Packages. In most of our projects and assignment we will use this package.
// Give the following command:
//     npm i inquirer
//     npm i --save-dev @types/inquirer
// Add .gitignore file and Write your code in app.ts file.
// Give the following commands:
//     tsc
// node app.js
