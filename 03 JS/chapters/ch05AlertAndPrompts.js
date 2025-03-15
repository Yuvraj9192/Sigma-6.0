alert("please check your connection!");

console.log("this is a simple msg");
console.error("this is an error msg");
console.warn("this is a warning msg");

// creating a username

let naam = prompt("enter your name: ");
let roll = prompt("enter your roll number : ");
console.log(`welcome, ${naam} your username is generated successfully!`)
console.log(`Username: ${naam+roll.substring(roll.length-4,roll.length)}`);