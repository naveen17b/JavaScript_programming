
/**
 * map function: The map() method creates a new array with the results of calling a provided function on every element in the calling array.
 * 
 * maps can't be iterated hence for in or for of loops can';t be used to iterate
 * 
 */

//example:1
const arrayToMap = [1,2,3,4,5];
const mappedArray = arrayToMap.map( arrayToMap => arrayToMap * 2);
console.log(mappedArray);

//example:2

const map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
map.set(1, 'num');     // overwrites the previous numeric key
console.log(map);


for( const [key, value] of map) {
    console.log(key, ': ' + value); 
}

/**
 * objects can't be iteratable wioth the looping statements like for...of, for...in, etc.
 * 
 * But, we can use the Object.keys() method to get the keys of the object and then iterate over them.
 * 
 */


//looping on the objects  --> ofr in is used to iterate throught the elementws in the object

const mapObject = {

    js: 'javascript',
    ts:'typescript',
    py:'pyhton'
}

for (const key in mapObject) {
    if (Object.prototype.hasOwnProperty.call(mapObject, key)) {
        const element = mapObject[key];
        console.log(element);
        
    }
}