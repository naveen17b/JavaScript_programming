/**
 * functions are blocks of code designed to perform specific tasks. 
 * They can be defined in various ways and are one of the fundamental building blocks in JavaScript programming
 */


//function syntax

function functionName(parameters) {
    // function body
}

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Tester")); // "Hello, Tester!"

/**
 * Function Expressions
 * A function expression defines a function inside an expression, and it can be anonymous or named.
 * 
 * const functionName = function (parameters) {
    // function body
 };
 */


const greetPerson = function (name) {
    return "Hello, " + name + "!";
};

console.log(greetPerson("Bob")); // "Hello, Bob!"

/**
 * Function Parameters and Arguments
 * Functions can take parameters, which are specified when the function is defined, 
 * and arguments, which are the values passed to the function when it is invoked.
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5


/**
 * Rest Parameters: allows you to send indefinite numbers as an array
 */

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
