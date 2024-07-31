// function: They encapsulate code that can be reused, help organize code, 
//and implement complex behavior. Functions in JavaScript are first-class objects, 
//meaning they can be stored in variables, passed as arguments to other functions, and returned from other functions.

//Basic declaration of function

function newFunction() {

}

//calling the function
newFunction();


// //defining a function  and assiging a variable with the prompt keyword, this is to be used in a browser instead of here(code editors)

// function secondFunction(){
//     let nameOfPerson = prompt('what is your name?');
//     console.log("hello " + nameOfPerson);
// }

// secondFunction();

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

//greet(Myname);


//function expression can be stored in variable:

const greet1 = function (name) {
    return `Hello, ${name}!`;
};

//arrow functions:
const greet2 = name => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return can be omitted
const greet3 = name => `Hello, ${name}!`;

let addNumber = (x, y) => console.log(x+y);

addNumber(4, 7);


//Arrow function for the arry elements

let arrElements = ['Testing', 'Development', 'DevOps'];
//let domain = "IT Domain";
console.table(arrElements);
arrElements.forEach(ae => (console.table(ae)));



/**
 * Spread operator:
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

restParameterFunction(23, 54, 678);


/**
 * immediately invoked functgion expressions: it gets invoked immediately
 */

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

