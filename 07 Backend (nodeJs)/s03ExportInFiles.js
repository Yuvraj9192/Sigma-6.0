// here we gonna use some maths related coding

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const pie = 3.14;

let ans = (op1, op2, req) => {
    if (req === "sum") {
        return sum(op1, op2);
    }
    if (req === "mul") {
        return mul(op1, op2);
    }
}

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    pie : pie
};

module.exports = obj;