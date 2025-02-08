/**
 * Parsing: 
 */

let str_int = "6";
let int_int = parseInt(str_int);   //Converts a string to an integer.

console.log("Type of ", int_int, "is", typeof int_int);

let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);


//The parseInt() method simply stops parsing when it runs into a non-numeric character

let str_nan = "hello!";
let int_nan = parseInt(str_nan);  

console.log("Type of", int_nan, "is", typeof int_nan);     //Type of NaN is number

/**
 * Parsefloat():
 */

//parseFloat() -> can deal with one dot in the number, and the numbers after that are interpreted as decimals

let str_float = "7.6";
let int_float = parseFloat(str_float);  

console.log("Type of", int_float, "is", typeof int_float);   //output -> Type of 7.6 is number