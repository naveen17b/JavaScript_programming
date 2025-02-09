
/**
 * foreach function: 
 * 
 * In callback function , we dont define the name of the function
 * 
 * function functionName(){}  --> regular definition of the function
 * 
 * function () {} ---> callback function
 */

const foreachArray = ['name', 'roll', 'domain', 'company'];
foreachArray.forEach(function(arrayelement){
    console.log(arrayelement);
})

console.log('\n');

const array2 = ['testing', 'devops','data engineering'];
function callarray2(el){
    console.log(el);
    // return el;
}
array2.forEach(callarray2);

//array in object formate
const arrayObj = [
    {
        languageName: 'Javascript',
        languageCode:'Js'
    },
    {
        languageName: 'Typescript',
        languageCode:'Ts'
    },
    {
        languageName: 'Python',
        languageCode:'py'
    },
]

// is missing the parameter to access each element of the array.
arrayObj.forEach( (elem)=> {

    console.log('language code : ' +elem.languageCode);
    
})