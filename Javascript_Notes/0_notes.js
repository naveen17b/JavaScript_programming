/**
 * Type conversions: When an operator is applied to the “wrong” type of value, JavaScript will
    quietly convert that value to the type it needs, using a set of rules that often
    aren’t what you want or expect. This is called type coercion.
 */


/**
 * const 
 * const declarations always need an initializer, because they forbid any kind of assignment after declaration, 
 * and implicitly initializing it with undefined is likely a programmer mistake.
 */

/**
 * 
 * execution context: The execution context is an abstract concept that holds information about the environment within which the current code is being executed
 * 
 * global execution context: The global execution context is the outermost execution context and is created when a script is run. It is associated with the global object, which is the window object in the case of web browsers.
 * 
 * function execution context: When a function is invoked, a new execution context is created. This new execution context is pushed onto the execution stack.
 * 
 * lexical environment: The lexical environment is the environment in which the code is physically present.
 * 
 * variable environment: The variable environment is where the variables are stored and how they relate to each other in memory.
 * 
 * local execution context: The local execution context is the execution context of the currently executing function.
 * 
 * execution stack: The execution stack is a stack data structure that stores information about the active subroutines of a computer program.
 * 
 * call stack: The call stack is a stack data structure that stores information about the active subroutines of a computer program.
 * 
 * scope chain: The scope chain is a list of objects that are searched for an identifier when it is referenced in a program.
 * 
 * closure: A closure is a function that captures the lexical environment in which it was created.
 * 
 * eval: The eval function is used to evaluate a string of JavaScript code in the context of the current execution environment.
 * 
 * this: The this keyword refers to the object that the function is a method of.
 * 
 * 
 */

/**
 * Memory Creation Phase (Compilation Phase)
 * Before executing the code, JavaScript allocates memory for variables and functions. 
 * This is also known as the Hoisting phase.
 * 
 * What happens in this phase?
 * Variables declared with var are assigned undefined
 * Function declarations are stored in memory
 * Variables declared with let and const are stored in the "Temporal Dead Zone" (TDZ) until execution
 * 
 */