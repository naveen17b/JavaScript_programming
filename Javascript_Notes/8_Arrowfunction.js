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

const nameOfTheStudent = () => console.log("The name of the student is Krishna");
nameOfTheStudent();

//Arrow function for the array elements

/**
 * we can combine the arrow function with certain built-in methods.
 * For example, we can use the foreach() method on an array. 
 * This method executes a certain function for every element in the array
 */

let arrElements = ['Testing', 'Development', 'DevOps'];

console.table(arrElements);

arrElements.forEach(ae => (console.table(ae)));

arrElements.push('full stack testing');

console.count(arrElements);
console.info(arrElements);
