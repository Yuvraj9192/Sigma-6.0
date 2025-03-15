function isAdult(age) {
    if(age >= 18) console.log("you are adult");
    else console.log("you are not adult");
}

let num = prompt("enter a number: ");
isAdult(parseInt(num));