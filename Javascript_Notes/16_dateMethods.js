/**
 * Date methods:
 */

//create dates is by using the different constructors.

let currentDate = new Date();

console.log(currentDate);


// now() method that returns the current date and time

let timeNow = Date.now();
console.log(timeNow);


//list of date and time methods 

let d = new Date();
//console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
//console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
//console.log("Seconds:", d.getSeconds());
//console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());