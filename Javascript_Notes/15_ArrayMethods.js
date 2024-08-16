/**
 * 
 */

let array_items = ["grapefruit", 4, "hello", 5.6, true];

function printArrayElements(element, index) {

    console.log('the element : ' + element + ' is at the index position : ' + index);
    
}

array_items.forEach(printArrayElements);