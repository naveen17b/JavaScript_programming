/**
 * creating an object and having a function inside it
 */

const person = {

    name:'Krishna',
    mailkID:'krish@QA.com',

    welcomeToTesting: function(){
        //console.log(`Hello, ${person.name}`);
        console.log(`Hello ${this.name}, welcome top the testing world `);
        console.log(this);
        

    }
}

/**
 * The this keyword inside the welcomeToTesting method refers to the person object because 
 * the method is invoked on the person object.
 */

person.welcomeToTesting();

//changing the name of the person to 'Rama'
person.name= 'Rama';
person.welcomeToTesting();