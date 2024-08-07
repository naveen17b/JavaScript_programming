/**
 * Premitive datatypes: 
 */

console.group("This is a message to know the Data Type of the variable");

let age = 25;
let temperature = -5.6;

console.log(typeof(age));


console.group("This is a message to know the Data Type of the variable");

const Designation = "Software Test engineer";

console.log(typeof(Designation));


console.group("This is a message to know the Data Type of the variable");

let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

console.log(typeof(person));

" output: object"

"In JavaScript, an object is a collection of key-value pairs where the keys are strings (or symbols) and the values can be of any data type"
"including other objects. Objects are used to store related data and functionality together."


console.group("This is a message to know the Data Type of the variable");

let emptyValue = null;

console.log(typeof(emptyValue));

console.group("This is a message to know the Data Type of the variable");

let isActive = true;
let isVerified = false;

console.log(typeof(isActive));
console.log(typeof(isVerified));

console.group("This is a message to know the Data Type of the variable");

let notAssigned;
let missingValue = undefined;

console.log(typeof(missingValue));

let colors = ["red", "green", "blue"];

function wish(name) {
    return `hello, ${name}`; // (name) -> will not work
}

//console.log(wish("naveen"));

console.log(typeof(wish));
