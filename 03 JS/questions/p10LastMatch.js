let num1 = prompt("enter num1 : ");
let num2 = prompt("enter num2: ");

let lastNum1 = num1[num1.length-1] + num2[num1.length-2];
let lastNum2 = num2[num1.length-1] + num2[num1.length-2];

if(lastNum1 === lastNum2 && num1[num1.length - 1] === num2[num2.length-1]) {
    console.log("yes the last two digit is same.");
}

else{
    console.log("yes the last two digit is same.");
}