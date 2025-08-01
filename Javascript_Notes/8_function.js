/**
 * function: They encapsulate code that can be reused, help organize code, and implement complex behavior. 
 * Functions in JavaScript are first-class objects, meaning they can be stored in variables, 
 * passed as arguments to other functions, and returned from other functions.
 * 
 */

//Basic declaration of function

function newFunction() {
    console.log(`im a tester`);
    
}

//calling the function
newFunction();


/**
 * Here's why you should use ${name}:
 * 
 * Template Literals: Template literals are a feature in JavaScript that allows for easier string interpolation and multi-line strings.
 * 
 * They are enclosed in backticks (`) instead of single ('') or double ("") quotes.
 * 
 * String Interpolation: Using ${} inside a template literal allows you to insert the value of a variable or an expression directly into the string.
 * 
 * Readability: It makes the code more readable and concise compared to concatenation.
 */

function wish(name) {
    return `hello, ${name}`;        // (name) -> will not work
}

console.log(wish("naveen"));


/**
 * Bindings declared with let and const are in fact local to the block that they
 * are declared in, so if you create one of those inside of a loop, the code before and
 * after the loop cannot “see” it.
 */


/**
 * 
 * @param {*} name 
 * @returns 
 */

//declaring function
function greet(name) {
    return `Hello, ${name}!`;

}

//greet(name);


//function expression can be stored in variable:

const greet1 = function (name) {
    return `Hello, ${name}!`;
}

console.log(greet1("krishna"))


/**
 * Spread operator: The spread operator allows an iterable to expand in places where 0+ arguments are expected.
 * It is mostly used in the variable array where there is more than 1 values are expected.
 * 
 * Rest parameters: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
 * 
 */


let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very",
    "powerful"];

console.log(message);

//Rest parameters

function restParameterFunction(par1, par2) {
    console.log(par1, par2);
}

restParameterFunction(23, 54, 678);

//now, use ...par2 in the above function

function restParameterFunction(par1, ...par2) {
    console.log(par1, par2);
}

restParameterFunction(23, 54, 178);


//Generator function, it can pause and resume execution:

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}

const gen = generatorFunction();
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World

//Methodf defined in object literal:
const person = {
    name: 'Alice',
    greet() {
        return `Hello, ${this.name}!`;
    }
};

//Class method
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

/**
 * Modules allow for better organization of code by dividing it into smaller, reusable pieces. 
 * This is crucial for maintaining and scaling large applications.
 * 
 */

// // greet.js
// export function greet(name) {
//     return `Hello, ${name}!`;
// }

// // main.js
// import { greet } from './greet.js';
// console.log(greet('World'));


/**
 * Arrow function: Arrow functions provide a more concise syntax and do not have their own this context.
 */


const greetPerson = (name) => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return keyword can be omitted
const greeting = name => `Hello, ${name}!`;

// Using the function
console.log(greeting('Charlie')); // Output: Hello, Charlie!

/**
 * 
 * @param {*} name 
 * @returns 
 */

/**
 * Here's why you should use ${name}:
 * 
 * Template Literals: Template literals are a feature in JavaScript that allows for easier string interpolation and multi-line strings.
 * 
 * They are enclosed in backticks (`) instead of single ('') or double ("") quotes.
 * 
 * String Interpolation: Using ${} inside a template literal allows you to insert the value of a variable or an expression directly into the string.
 * 
 * Readability: It makes the code more readable and concise compared to concatenation.
 */

function wish(name) {
    return `hello, ${name}`;        // (name) -> will not work
}

console.log(wish("naveen"));


// Function Declaration
function greetDeclaration(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function (name) {
    return `Hello, ${name}!`;
};

// Arrow Function
const greetArrow = name => `Hello, ${name}!`;

// Using the functions
console.log(greetDeclaration('Alice'));    // Output: Hello, Alice!
console.log(greetExpression('Bob'));       // Output: Hello, Bob!
console.log(greetArrow('Charlie'));        // Output: Hello, Charlie!

