

/**
 * Higher Order Function: A function that takes a function as an argument or returns a function is called a higher order function.
 * 
 */


/**
 * for...of is used to iterate over iterable objects like arrays, strings, maps, sets, etc., but not plain objects.
 */

const sampleArray = [1,2,3,4,5];

for (const element of sampleArray) {
    console.log(element);

}


//filter function: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const arrayToFilter = [1,2,3,4,5];

const filteredArray = arrayToFilter.filter( arrayToFilter => arrayToFilter > 2.6);

console.log(filteredArray);

//reduce function: The reduce() method executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.

//

