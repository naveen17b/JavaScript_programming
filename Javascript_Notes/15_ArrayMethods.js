/**
 * 
 */

let array_items = ["grapefruit", 4, "hello", 5.6, false];

function printArrayElements(element, index) {

    console.log('the element : ' + element + ' is at the index position : ' + index);

}

array_items.forEach(printArrayElements);


/**
 * Filtering array:
 */

function filterArray(element, index) {

    //console.log('the element : ' + element + ' is at the index position : ' + index);
    return typeof element === 'string';

}

let filteredArrayElement = array_items.filter(filterArray);

console.log(filteredArrayElement);


console.log(array_items.every(filterArray));