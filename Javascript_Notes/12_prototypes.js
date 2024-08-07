/**
 * prototypes:When nothing is specified when creating a class, the objects inherit from the Object.prototype prototype
 */

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}

//adding a function to prototype is adding a function to the class
/**
 * The difference between a method and a function is that a function is defined anywhere in the script, and a method is defined inside a class
 */

Person.prototype.introduce = function () {
    console.log("hi " + this.firstname);
}

Person.prototype.colorOfperson = 'Fair';

let p = new Person('Ravi', 'kumar');
p.introduce();
console.log(p.colorOfperson);

