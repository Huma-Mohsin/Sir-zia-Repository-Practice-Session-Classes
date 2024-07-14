class SomeObject {
    constructor(public s: string) {}
  }
  
  // Function to create an instance of SomeObject using an object
  function fn(data: { s: string }): SomeObject {
    return new SomeObject(data.s);
  }
  
  // Example usage
  const data = { s: 'hello' };
  const obj = fn(data);
  console.log(obj); // Output: SomeObject { s: 'hello' }