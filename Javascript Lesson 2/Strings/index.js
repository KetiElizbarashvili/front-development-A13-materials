//Creating Strings 

let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;
 

// concatenation 

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"
console.log(fullName)

// Using template literals
let fullNameTemplate = `${firstName} ${lastName}`; // "John Doe"
console.log(fullNameTemplate)
  


//length property 


let string = "Hello";
console.log(string.length); // Outputs: 5

//Accessing Characters 

let str = "Hello";
console.log(str[0]); // Outputs: 'H'
console.log(str[1]); // Outputs: 'e'
 
let text = "Hello";

console.log(text.toUpperCase());   // HELLO
console.log(text.toLowerCase());   // hello
console.log(text.includes("H"));   // true
console.log(text.indexOf("e"));    // 1
console.log(text.slice(0,3));      // Hel
console.log("     Hello".trim());  // Hello


//Alert and Console Logs 

let greet = "Hello, World!";
alert(greet); // Displays a pop-up with "Hello, World!"
console.log(greet); // Logs "Hello, World!" to the console
 