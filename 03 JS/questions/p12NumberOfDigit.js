let number = prompt("Enter a number: ");
let copy = parseInt(number);

let count = 0;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log("Number of digits is: " + count);