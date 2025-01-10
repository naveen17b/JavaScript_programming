/**
 * promise:
 * A Promise in programming is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
 * Promises allow you to work with asynchronous operations in a more manageable way than using callbacks.
 */

let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
  
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Something went wrong.");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result); // This will run if the promise is resolved
    })
    .catch(error => {
      console.log(error); // This will run if the promise is rejected
    });
  