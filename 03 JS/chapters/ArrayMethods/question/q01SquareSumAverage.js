// square, sum and then find the average

let num = [1, 2, 3, 4, 5];

let findSqr = num.map((ele) => ele*ele);
console.log(findSqr);

let findsum = findSqr.reduce( (sum, curr) => (sum + curr));
console.log(findsum);

console.log(`Average: ${findsum/num.length}`);