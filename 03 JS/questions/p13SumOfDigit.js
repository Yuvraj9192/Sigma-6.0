let num = prompt("enter a number : ");
let copy = parseInt(num);

let sum = 0;
while(copy != 0) {
    let rem = copy%10 ;
    sum += rem;
    copy = Math.floor(copy/10) ;
}

console.log(`sum of ${num} is ${sum}`);