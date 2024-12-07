/**
 * Arrow function:
 */

//arrow functions:
const greet2 = name => {
    return `Hello, ${name}!`;
};

// For single expression functions, the return can be omitted
const greet3 = name => `Hello, ${name}!`;

let addNumber = (x, y) => console.log(x + y);

addNumber(4, 7);


//Arrow function for the arry elements

let arrElements = ['Testing', 'Development', 'DevOps'];

console.table(arrElements);

arrElements.forEach(ae => (console.table(ae)));

arrElements.push('full stack testing');

console.count(arrElements);
console.info(arrElements);
