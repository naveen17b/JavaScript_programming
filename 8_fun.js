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

// Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log(`Hello, ${name}!`);
})('World');

// Generator Function
function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}

const gen = generatorFunction();
console.log(gen.next().value); // Output: Hello
console.log(gen.next().value); // Output: World

// Method defined in an object literal
const person = {
    name: 'Alice',
    greet() {
        return `Hello, ${this.name}!`;
    }
};

// Class Method
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

// Using functions
console.log(greetDeclaration('Alice'));    // Output: Hello, Alice!
console.log(greetExpression('Bob'));       // Output: Hello, Bob!
console.log(greetArrow('Charlie'));        // Output: Hello, Charlie!

/**
 * Modules allow for better organization of code by dividing it into smaller, reusable pieces.
 * This is crucial for maintaining and scaling large applications.
 */

// // greet.js
// export function greet(name) {
//     return `Hello, ${name}!`;
// }

// // main.js
// import { greet } from './greet.js';
// console.log(greet('World'));