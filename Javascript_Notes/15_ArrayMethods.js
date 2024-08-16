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

