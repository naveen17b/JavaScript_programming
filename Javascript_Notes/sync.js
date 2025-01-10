/**
 * synchronous programming:
 * synchronous (sync) and asynchronous (async) programming refer to how the language handles 
 * the execution of tasks and manages waiting periods,such as input/output operations or fetching data.
 * 
 * 
 * Synchronous Programming:
 * 
 * Definition: Tasks are executed one after the other in the order they appear. 
 * Each task waits for the previous one to complete before starting.
 * 
 * Behavior: Blocks the execution of subsequent code until the current task finishes.
 */

// Example 1: Synchronous programming

console.log("Task 1");
setTimeout(() => {
    console.log("Task 2");
}, 2000);
console.log("Task 4");
console.log("Task 3");
