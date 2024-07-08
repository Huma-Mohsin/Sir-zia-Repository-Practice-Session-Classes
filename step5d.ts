interface Author  {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;  //we can use typed object inside an interface or interface inside a typed structure.
    
    name: string;
};

const myBook : Book = {  //here we declare an object ,named myBook relate to Book typed which is already an object+
    
    author: {//author property is of object type.
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}
//In summary, this code defines two types, Author and Book, and creates a constant myBook of type Book with an object literal that matches the shape of the Book type.

//This is an example of using type aliases (the type keyword) to define new types in TypeScript, and using those types to create objects with specific shapes. This helps with code organization, readability, and maintainability, and also enables type checking and auto-completion in your IDE.