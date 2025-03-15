// in array
let list = ["yuvraj", "mohit", "sunny", "rishav", "vishal"];

let [winner, runnerup, ...others] = list;
console.log(winner);
console.log(runnerup);
console.log(others);

// in objects
const student = {
    name: "yuvraj",
    age: 19,
    class: "BCA",
    subjects: ["hinid", "english", "math", "science"],
    username: "yuvi@8219",
    password: "yuv7890"
}

// let username = student.username;
// let pass = student.pass; // anohter way

let {username, password} = student;

console.log(username);
console.log(password);