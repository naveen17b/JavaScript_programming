/**
 * Getters and setter methods:
 */

class PersonDetails {
    #firstname;
    #lastname;
    constructor(firstName, lastName) {
        this.#firstname = firstName;
        this.#lastname = lastName;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstName) {
        this.#firstname = firstName;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastName) {
        this.#lastname = lastName;
    }
}

const p1 = new Person('kumar', 'krishna', 'ram');
console.log(p1.firstName);  //output -> kumar

p1.firstName = 'pavan';
console.log(p1.firstName);
//output -> pavan

