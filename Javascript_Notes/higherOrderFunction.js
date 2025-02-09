

/**
 * Higher Order Function: A function that takes a function as an argument or returns a function is called a higher order function.
 * 
 */


/**
 * for...of is used to iterate over iterable objects like arrays, strings, maps, sets, etc., but not plain objects.
 */

const sampleArray = [1, 2, 3, 4, 5];

for (const element of sampleArray) {
    console.log(element);

}


//filter function: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const arrayToFilter = [61, 19, 74, 11, 25, 32, 48, 58];

const filteredArray = arrayToFilter.filter(arrayToFilter => arrayToFilter > 2.6);

console.log(filteredArray);

/**
 * In this corrected version, the arrow function used in the `filter` method is simplified to a single expression, 
 * which makes the code more concise and eliminates the syntax error.
 */

arrayToFilter.push(23, 12, 51);
console.log(arrayToFilter);
const wrappedArray = arrayToFilter.filter((arrayToFilter) => {
    return arrayToFilter > 34
})

console.log(wrappedArray);

//reduce function: The reduce() method executes a reducer function (that you provide) on each element of the array,
// resulting in a single output value.


