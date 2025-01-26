
/**
 * singleton object: An object that is created only once and used throughout the application.
 * Object.create() is used to create a new object with the specified prototype object and properties.
 */

//singleton object creation
const user1 = new Object();  // output ----> {}

//one more way to create an object
const user2 = {};  // output ----> {}

//singleton object creation
const user3 = Object.create(null);  // output ----> {}

console.log(user1);
console.log(user2);

const testingUser = {

    title: 'userOnly',
    fullName: {
        username: {
            firstname: 'Krishna',
            lastname: 'krisnaaa'
        }
    }

};
console.log(testingUser.fullName?.username?.firstname);

const obj1 = {1: 'Qa1' , 2:'QA2'}
const obj2 = {3: 'Qa3' , 4:'QA4'}

//combining both  objects
const obj3= {obj1, obj2}
console.log(obj3); // output ----> { obj1: { '1': 'Qa1', '2': 'QA2' }, obj2: { '1': 'qa3', '2': 'QA4' } }

//combining both  objects
const obj4= Object.assign({},obj1, obj2);
console.log(obj4);

// //combining both  objects
// const obj5= {...obj1, ...obj2} // output ----> { '1': 'qa3', '2': 'QA4' }
// console.log(obj4); // output ----> { '1': 'qa3', '2': 'QA4' }

const groupUsers = [

    {
        id:1,
        name:'N1'
    },

    {
        id:2,
        name:'N2'
    },

    {
        id:3,
        name:'N3',
        email:'n@qa.com'   
    }

]

console.log(groupUsers[0].name); // output ----> N1
console.log(Object.keys(groupUsers[2])); // output ----> [ 'id', 'name' ]




