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


//

class newPerson {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        if (firstname.startsWith("M")) {
            this.#firstname = firstname;
        } else {
            this.#firstname = "M" + firstname;
        }
        this.#lastname = lastname;
    }

    //try executing the code by removing the below methods and see if it works!!

    // Getter for firstname
    getFirstname() {
        return this.#firstname;
    }

    // Getter for lastname
    getLastname() {
        return this.#lastname;
    }


}

/**
 * In the provided code, you're using private class fields (#firstname and #lastname) in the newPerson class. 
 * However, when you try to access p2.firstname, 
 * it will result in undefined because private fields are not directly accessible outside the class. 
 * Instead, you should use a public getter method to retrieve the values of private fields.
 */


let p2 = new newPerson("ria", "Maga");
console.log(p2.firstname);

console.log(p2.getFirstname());
