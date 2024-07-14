class SomeObject {
    s;
    constructor(s) {
        this.s = s;
    }
}
// Function to create an instance of SomeObject using an object
function fn(data) {
    return new SomeObject(data.s);
}
// Example usage
const data = { s: 'hello' };
const obj = fn(data);
console.log(obj); // Output: SomeObject { s: 'hello' }
export {};
