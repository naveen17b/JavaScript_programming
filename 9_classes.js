/**
 * Classes in JavaScript encapsulate data and functions that are part of that class. If you
 * create a class.
 * The constructor method is a special method that we use to initialize objects with
 * our class blueprint. There can only be one constructor in a class. This constructor
 * contains properties that will be set when initiating the class.
 * New keyword: new word is what tells JavaScript to look for the special constructor function in 
 * the Person class and create a new object
 */


// define a class

class FirstClass{
    constructor (name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }

}

let nameOfIndividual = new FirstClass('kumar','pavan');

console.log('hi ,' + nameOfIndividual.name1);
console.log('hello ,'+ nameOfIndividual.name2);





/**
 * Methods:
 */