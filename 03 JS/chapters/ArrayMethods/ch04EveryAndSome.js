// every and some function

// every plays a role of AND
let nums = [2, 4, 6, 8];

let evenArr = nums.every( (ele) => (ele % 2 == 0));
console.log(evenArr);

//some plays a role of OR
let number = [2, 4, 6, 8, 1];

let atLeastOdd = number.some( (ele) => (ele % 2 != 0) );
console.log(atLeastOdd);

// find if all element is multiple of 10 or not

let arr = [10, 20, 30, 110, 50];

let check10Mult = arr.every( (ele) => ele % 10 == 0);

console.log(check10Mult);