const animal = ["Lion", , "Angel"];

console.log(animal);

const result = animal.map((item, index) => item || `Slot ${index}`);

console.log(result);

//out put -> [ 'Lion', <1 empty item>, 'Angel' ]

//map() skips the empty slot and allows you to handle it with a custom function.

