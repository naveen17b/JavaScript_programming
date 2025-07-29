
//Array of students with data

const studentData = [
    { name: "John", age: 20 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 19 },]

for (const student of studentData) {

    console.log(`Name: ${student.name}, Age: ${student.age}`);
}



// maps

const map = new Map();

map.set("name", "Naveen");
map.set("age", 25);
map.set("city", "Bangalore");
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


//objects 

const employee = {

    name: "Alice",
    age: 30,
    position: "Developer"
}

for (const key in employee) {
    // console.log(employee[key]);
    console.log(`${key}: ${employee[key]}`);
}


// for in loop is used for objects not for objects like arrays, maps, sets, etc.
const programming = ["JavaScript", "Python", "Java", "C++"];
for (const language in programming) {
    // console.log(language);
    // console.log(programming);

    console.log(programming[language]);

}

//for of loop is used for arrays, strings, maps, sets, etc.

const Details = new Map();

map.set("name", "Naveen");
map.set("age", 25);
map.set("city", "Bangalore");

for (const key in Details) {

    console.log('Key:', key, 'Value:', Details[key]);
    
   //doesn't return any thing as map is not itteratable with for...in loop
}

// The forEach method is used to execute a provided function once for each array element.
const programmingLanguage = ["JavaScript", "Python", "Java", "ruby"];

//first way of defining the foreach method
// It takes a callback function as an argument and applies it to each element in the array.
programmingLanguage.forEach(function (val) {
    console.log(val);
});

//second way of declaring the forEach method

programmingLanguage.forEach((val) => {
    console.log(val);

});
    

const series = ["Breaking Bad", "Game of Thrones", "Stranger Things"];

series.forEach((show, index, array) => {
    console.log(`Show ${index + 1}: ${show} - Array length: ${array.legth}`);
});


//foreach as objects
//useful in databases, APIs, etc. to iterate over objects
//forEach can be used to iterate over arrays of objects, allowing you to access properties of
//each object within the array.
//Example: Iterating over an array of objects representing programming languages
const languages = [

    {
        language: "javascript",
        type: "scripting",

    },
    {
        language: "python",
        type: "scripting",

    },
    {
        language: "java",
        type: "programming",
    }

]

languages.forEach((lang) => {
    console.log(lang.type);
})
