//TypeScript does not support duck typing. The following code is exactly the same as above but with types added. We annotate the argument of invokeSomeFn as obj:Person. Now invokeSomeFn will not accept the BankAccount as it has a different structure.
let person = {
    name: 'Jon',
    someFn: function () {
        console.log("hello " + this.name + " king in the north");
    }
};
let bankAccount = {
    accountNo: 100,
    someFn: function () {
        console.log("Please deposit some money");
    }
};
let invokeSomeFn = function (obj) {
    obj.someFn();
};
invokeSomeFn(person);
invokeSomeFn(bankAccount);
export {};
//Argument of type 'BankAccount' is not assignable to parameter of type 'Person'.
//Property 'name' is missing in type 'BankAccount' but required in type 'Person'.
//   //But we can get around it by creating a separate type consisting of someFn only. In this example, we define an interface for the parameter inline. Now invokeSomeFn will accept any object that has someFn method in it. This trick, allow us to implement the Duck typing in TypeScript.
//   let invokeSomeFn= function(obj:{someFn:() =>  void }) {
//     obj.someFn()
// }
// invokeSomeFn(person)//hello Jon king in the north
// invokeSomeFn(bankAccount) //Please deposit some money