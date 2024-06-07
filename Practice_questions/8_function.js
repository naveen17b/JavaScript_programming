// function: They encapsulate code that can be reused, help organize code, 
//and implement complex behavior. Functions in JavaScript are first-class objects, 
//meaning they can be stored in variables, passed as arguments to other functions, and returned from other functions.



//declaring function
function greet(name) {
    return `Hello, ${name}!`;
}


//function expression can be stored in variable:

const greet = function (name) {
    return `Hello, ${name}!`;
};

//arrow functions:
const greet = (name) => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return can be omitted
const greet = name => `Hello, ${name}!`;


//immediately invoked functgion expressions:
(function (name) {
    console.log(`Hello, ${name}!`);
})('World');


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

// greet.js
export function greet(name) {
    return `Hello, ${name}!`;
}

// main.js
import { greet } from './greet.js';
console.log(greet('World'));


/**
 * Arrow function: Arrow functions provide a more concise syntax and do not have their own this context.
 */


const greet = (name) => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return keyword can be omitted
const greet = name => `Hello, ${name}!`;

// Using the function
console.log(greet('Charlie')); // Output: Hello, Charlie!

/**
 * 
 * @param {*} name 
 * @returns 
 */

// Function Declaration
function greetDeclaration(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow Function
const greetArrow = name => `Hello, ${name}!`;

// Using the functions
console.log(greetDeclaration('Alice'));    // Output: Hello, Alice!
console.log(greetExpression('Bob'));       // Output: Hello, Bob!
console.log(greetArrow('Charlie'));        // Output: Hello, Charlie!

