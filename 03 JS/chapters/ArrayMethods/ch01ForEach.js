// for each function

let arr = [1, 2, 3, 4];

// function print(el) {
//     console.log(el);
// }

// arr.forEach(print);

// or

let print = function (el) {
    console.log(el);
};

arr.forEach(print);

// another example

let bca = [
    {
        name: "yuvraj sharma",
        marks: 99
    },
    {
        name: "divrop",
        marks: 100
    },
    {
        name: "raghav",
        marks: 44
    },
];

let gpa = bca.map((ele) => {
    return ele.marks/10 ;
});

bca.forEach( (student) => {
    console.log(student);
});

console.log(gpa);