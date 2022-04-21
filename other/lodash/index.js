const _ = require("lodash");

let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);  // First element: sky
console.log(`Last element: ${lel}`);   // Last element: universe

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3));  // 4
console.log(_.nth(nums, -3));  // 6

let c1 = _.slice(nums, 2, 6);
console.log(c1);  // [ 3, 4, 5, 6 ]

let c2 = _.slice(nums, 0, 8);
console.log(c2);  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let r = _.random(10);
console.log(r); // random between 0 and 10

let word = _.sample(words);
console.log(word);  // random word from the array
