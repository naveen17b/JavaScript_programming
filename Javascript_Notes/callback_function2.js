function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!



/**
 * returning a function:
 * we are returning a function from another function - 
 * We can return a function because functions in JavaScript are treated as values
 * 
 * Higher order functions are functions that can take other functions as arguments or return a function as their result.
 */

function sayHello() {
    return () => {
        console.log("Hello!");
    };
}




function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

// Arrow function
const addSquares2 = (a, b) => {
    const square = (x) => x * x;
    return square(a) + square(b);
};
