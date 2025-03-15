// spread -> it takes paramrters and converts it in an object

let nums = [579,9,78,99,1,0];

let smallest = Math.min(...nums);
console.log(smallest);

// another example

let name = "yuvrajsharma";
console.log(...name);

// spread with array literals

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let newArr = [...arr];
console.log(newArr);

let naam = "divroop";
console.log(...naam);

// spread with object literals

let data = {
    email: "yuvraj.shr07@gmail.com",
    password: "yuvraj!0i230"
};

let datacopy = {
    ...data,
    id: "#38340edfhjsdg"
}

console.log(datacopy);