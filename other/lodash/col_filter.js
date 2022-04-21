const _ = require("lodash");

let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

//we filter out positive values of an array
let pos_nums = _.filter(nums, (e) => e > 0);
console.log(pos_nums); // [ 4, 3, 2, 7, 8, 9 ]
