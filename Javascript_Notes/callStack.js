/**
 * 
 * Call stack in javascript: The call stack is a stack data structure that stores information about the active subroutines of a computer program.
 * 
 * How does the call stack work?
 * The call stack is a stack data structure that stores information about the active subroutines of a computer program.
 * When a function is called, a new frame is pushed onto the call stack. When the function returns, the frame is popped off the call stack.
 * The call stack is a last in, first out (LIFO) data structure.
 * 
 */

function country() {
    console.log("India");
    city();
    
}

function city() {
    console.log("Bangalore");
    town();
    // country();  // if country() is called here, it will go into infinite loop, because it will call city() and city() will call country() and so on.
}

function town() {
    console.log("Mysore");
    
}

country();

// city();