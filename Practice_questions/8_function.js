//declaring function
function greet(name) {
    return `Hello, ${name}!`;
}


//function expression can be stored in variable:

const greet = function(name) {
    return `Hello, ${name}!`;
};

//arrow functions:
const greet = (name) => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return can be omitted
const greet = name => `Hello, ${name}!`;


//immediately invoked functgion expressions:
(function(name) {
    console.log(`Hello, ${name}!`);
})('World');

