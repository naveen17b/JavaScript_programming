/**
 * 
 */

let array_items = ["grapefruit", 4, "hello", 5.6, false];

function printArrayElements(element, index) {

    console.log('the element : ' + element + ' is at the index position : ' + index);

}

//forEach(): Performs the specified action for each element in an array.

array_items.forEach(printArrayElements);


/**
 * Filtering array:
 */

function filterArray(element) {

    //console.log('the element : ' + element + ' is at the index position : ' + index);
    return typeof element === 'string';

}

//Filter: Returns the elements of an array that meet the condition specified in a callback function.

let filteredArrayElement = array_items.filter(filterArray);

console.log(filteredArrayElement);

//Every: Determines whether all the members of an array satisfy the specified test.

console.log(array_items.every(filterArray));

/**
 * Mapping the values of the array: 
 * 
 * map: Calls a defined callback function on each element of an array, and returns an array that contains the results.
 */

let arrayElements = [1, 2, 4, 7];

mappedArray = arrayElements.map(x => x +1);

reversedArray = arrayElements.reverse();

console.log(reversedArray);

console.log(mappedArray);


/**
 * Last occurance in an array
 */

let array1 = ['good', 'better', 'best','better', 'good','better'];

lsOccurance = array1.lastIndexOf('better');

console.log(lsOccurance);


/**
 * fixing the number of decimal point a number must deliver
 */

let x = 1.23456;
let newX = x.toFixed(3);
console.log(x, newX);  //1.23456 1.235

