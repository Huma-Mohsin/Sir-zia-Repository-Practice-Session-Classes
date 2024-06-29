//Interferring type

let message = "Hello World";// Infering Types, 
                            //take your cursor on the variable name
console.log(message);

//Read me 
// the most basic types in TypeScript correspond to the seven basic kinds of primitives in JavaScript:

// 1. null //0 or absent
// 2. undefined //not given value
// 3. boolean // true or false
// 4. string // "", "Hello World"
// 5. number // 0, 5.1, -9
// 6. bigint // 0n, 5n, -10n     //-10n represents the integer -10 as a BigInt

const bigInt = 5n;
console.log(bigInt); // Output: 5n

// 7. symbol // Symbol(), Symbol("hi"),

// - Symbol() creates a new, unique Symbol
// - Symbol("hi") creates a new Symbol with the description "hi"


const sym1 = Symbol();
const sym2 = Symbol("hi");

console.log(sym1); // Output: Symbol()
console.log(sym2); // Output: Symbol(hi)


