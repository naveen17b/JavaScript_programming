/**
 * CallBack Function:
 * A callback function in JavaScript is a function that is passed as an argument to another function, 
 * and it is executed (or "called back") after some operation has been completed. 
 * Callbacks are a way to ensure that a particular code runs only after a specific task has finished, 
 * making them especially useful for asynchronous programming.
 */

// Example 1:
// Define a function that takes a callback function as an argument
function greet(name, callback) {
    console.log('Hello', name);
    callback();
}

function sayWelcome() {
    console.log("Welcome to the world of callbacks");
}

// Call greet and pass sayGoodbye as a callback
greet("krishna", sayWelcome);



// Example 2:

function greet(name, callback) {
    setTimeout(() => {
        console.log("Hello", name);
        callback('this is a async callback');
    }, 5000);
}

function sayWelcome(msg) {
    console.log(msg);
}

// Call greet and pass sayGoodbye as a callback
greet("Programmer", sayWelcome);

