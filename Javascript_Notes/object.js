/**
 * Objects:
 */

// Object literal

const mysymbol = Symbol('my symbol');

const jobTittle = {
    role: 'QA',
    tools: ['selenium', 'jmeter', 'postman'],
    isRemote: true,

};

const jsUser = {

    name: 'Krishna',
    place: 'Bangalore',
    email: "krishna@tester.com",
    [mysymbol]: 'secret',
    // Method
    login() {
        console.log('logged in');
    },
    // Method
    logout() {
        console.log('logged out');
    },
    // Method
    logName() {
        console.log(this.name);
    }
};

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser['name']);
console.log(jsUser[mysymbol]);
jsUser.login();
jsUser.logout();
jsUser.logName();


/** Object freezing
 * Object.freeze() only works on the immediate properties of the object. 
 * If an object contains other objects or arrays, you need to recursively freeze those as well.
 * 
 */
 
// jsUser.email = "newuser@QA.com";
// console.log(jsUser.email);
// Object.freeze(jsUser);
// jsUser.email = "krishna@qa.com";
// console.log(jsUser.email);

// const user1 = new Object({name: 'Krishna', place: 'Bangalore'});
// console.log(user1);
// console.log(user1.name);

jsUser.greeting1 = function() {
    console.log('hello jsUser');
}
console.log(jsUser.greeting1());

jsUser.greeting2 = function() {
    console.log(`hello jsUser, ${this.name}`);
}
console.log(jsUser.greeting2());
