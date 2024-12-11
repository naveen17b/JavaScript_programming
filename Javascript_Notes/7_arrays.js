const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArr);

console.log(myArr.length);

console.log(myArr.push(11));

console.log(myArr);

console.log(myArr.reverse());

//Slice:Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

const newArr1 = new Array(myArr.slice(1, 4));

console.log(newArr1);

/**
 * Deep Copy: A deep copy of an object is a copy whose properties do not share the same references 
 * (point to the same underlying values) as those of the source object from which the copy was made. 
 * As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
 */

const newArr2 = new Array(myArr.splice(1, 4));

console.log(newArr2);

/**
 * Splice method can be used to delete the value/elements in the arrays 
 */
let arr3 = [36,71,12,54,77,88,45,62,90];

console.log(arr3.sort());

console.log(arr3.splice(1,3));

//console.log(arr3.sort);   //output -> [Function: sort]

/**
 * itterating through the array elements using the functions
 */

let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);

arr.values();


/**
 * mapping of the array elements
 */

let arr2 = [1, 2, 3, 4];
let mapped_arr = arr2.map(x => x + 1);
console.log(mapped_arr);



