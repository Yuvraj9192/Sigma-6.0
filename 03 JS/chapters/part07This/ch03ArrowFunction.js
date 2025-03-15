const sum = (a, b) => {
    console.log(`sum: ${a+b}`);
};

sum(4,5);

// let power = (x, y) => {
//     console.log(`power: ${x**y**2}`);
// }

// power(2,6);


let power = (x, y) => (x**y**2);

let ans = power(2,6);
console.log(ans);