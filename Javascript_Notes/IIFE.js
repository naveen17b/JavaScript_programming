/**
 * 
 * IIFE: Immediately Invoked Function Expression
 * 
 * IIFE is a function that is executed right after it is created.
 * immediately invoked function expressions: it gets invoked immediately
 * 
 * It helps avoid polluting the global scope and is useful for encapsulating code.
 * 
 */

(function (name) {
    console.log(`Hello, ${name}!`);
})('World');


(function nameOfFunction(name){

    // return `Hello, ${name}!`;
    console.log(`Hello, ${name}!`);

}) (`naveen`);


(function nameOfuser(name){
    return `Hello, ${name}!`;
}) (nameOfuser(`naveen`));
