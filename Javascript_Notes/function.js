/**
 * Here's why you should use ${name}:
 * 
 * Template Literals: Template literals are a feature in JavaScript that allows for easier string interpolation and multi-line strings.
 * 
 * They are enclosed in backticks (`) instead of single ('') or double ("") quotes.
 * 
 * String Interpolation: Using ${} inside a template literal allows you to insert the value of a variable or an expression directly into the string.
 * 
 * Readability: It makes the code more readable and concise compared to concatenation.
 */

function wish(name) {
    return `hello, ${name}`;        // (name) -> will not work
}

console.log(wish("naveen"));