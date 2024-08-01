/**
 * Decoding:
 * Encoding:
 * The decodeUri() and encodeUri() are actually not really encoding and decoding, they are more so fixing broken URIs. 
 * It is like the previous example with the spaces. 
 * This method pair is really good at fixing broken URIs and decoding them back into a string.
 */


let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

/**
 * decodeUriComponent():
 * 
 * encodeUriComponent():
 */

let encoded_uri1 = decodeURIComponent(uri);
console.log('Encode:'+ encoded_uri1);

let decoded_uri1 = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri1);
