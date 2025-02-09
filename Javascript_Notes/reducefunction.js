
/**
 * Calls the specified callback function for all the elements in an array. 
 * 
 * The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * 
 */

const array1 = [1,3,5,8,9];

/*
const intialVal = 0;
const total = array1.reduce(function(preVal, curVal) {
    return intialVal + curVal

})
console.log(total);
 --> the total is the last value of the array element
*/

const total = array1.reduce(function(preVal, curVal) {
    return preVal + curVal

},1)
console.log(total);

// If initialVal is omitted, it defaults to the first element of the array, and .reduce() starts from the second element