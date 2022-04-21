const _ = require("lodash");

let vals = [-3, 4, 0, 12, 43, 9, -12];

// computes the minimum and maximum values of an array

let min = _.min(vals);
console.log(min);

let max = _.max(vals);
console.log(max);

max = _.max(_.range(5, 25));
console.log(max);

let obs = [{n: 12}, {n: -4}, {n: 4}, {n: -11}];

// compute the minimum and maximum of object properties, we use the _.minBy and .maxBy functions

min = _.minBy(obs, 'n');
console.log(min);

max = _.maxBy(obs, 'n');
console.log(max);
