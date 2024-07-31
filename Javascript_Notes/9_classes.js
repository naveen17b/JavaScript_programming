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

class FirstClass {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }

}

let nameOfIndividual = new FirstClass('kumar', 'pavan');

console.log('hi ,' + nameOfIndividual.name1);
console.log('hello ,' + nameOfIndividual.name2);





/**
 * Methods:
 */

class basicClass {
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    //defining a method
    wishPerson() {
        console.log("Hello " + this.firstName + ", " + "I hope you are doing great!");
    }

}

let greet = new basicClass('krishna');
//console.log(greeting); //basicClass { firstName: 'krishna', secondName: undefined }

greet.wishPerson();


/**
 * Properties: Properties, sometimes also called fields, hold the data of the class.
 * Often, it is not desirable to provide direct access to our properties
 */

//from the above defined class

console.log('hi ' + greet.firstName);


//if we dont want to grant access to the properties direct access from outside

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;

        //let p = new Person('krishna', 'ram');
        console.log(firstName);
        // output ->  krishna

    }

}

let p = new Person('Rama', 'krishna', 'ram');
console.log(p.firstName);      //output  ->  undefined


