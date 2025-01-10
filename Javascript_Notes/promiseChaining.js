/**
 * Promise chaining:
 * Promise chaining is a technique where multiple .then() calls are used in sequence, each one passing its resolved value to the next .then(). 
 * This allows you to execute a series of asynchronous tasks in a specific order, 
 * where the output of one task can be used as the input for the next.
 */

function getEvenNumber(number, delay) {

    return Promise = new Promise((result, reject) => {

        setTimeout(() => {
            if (number % 2 == 0) {
                result(number);
            }
            else {
                reject(new Error("The number is not even"));
            }

        }, delay);
    });

}

getEvenNumber(40, 3000)
    .then(result => {
        console.log(
            result, "is an even number"
        );
        return getEvenNumber(46);

    })
    .then(result => {
        console.log(
            result, "is an even number"
        );
    })
    .catch(error => {
        console.error(error, "is not an even number");

    })