let num1 = prompt("enter value of num1: ");
let num2 = prompt("enter value of num2: ");
let num3 = prompt("enter value of num3: ");

if(num1 > num2) {
    if(num1 > num3){
        console.log(`num1: ${num1} is greatest`);
    }
    else if (num3 > num1) {
        console.log(`num3: ${num3} is greatest`);
    }
}
if(num2 > num1) {
    if(num2 > num3){
        console.log(`num2: ${num2} is greatest`);
    }
    else if (num3 > num2) {
        console.log(`num3: ${num3} is greatest`);
    }
}
else {
    console.log(`num3: ${num3} is greatest`);
}