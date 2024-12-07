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

/**
 * The new word is what tells JavaScript to look for the special constructor function in the Person class and create a new object. 
 * The constructor gets called and returns an instance of the person object with the specified properties. 
 * This object gets stored in the p variable.
 */

let p = new Person('Rama', 'krishna', 'ram');
console.log(p.firstName);      //output  ->  undefined

