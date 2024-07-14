//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result11 = buildName("Bob"); //works correctly because last parameter is optional
//let result21 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result31 = buildName("Bob", "Adams"); //correct
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
var buildName11 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Khan"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
console.log(buildName11("sana", "tahir"));
console.log(buildName11("sana"));
