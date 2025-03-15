let num = prompt("enter a num: ");
let copy = parseInt(num);

let product = 1 ;
for(let i = copy ; i > 1 ; i--) {
    product = Math.floor(i*product);
}

console.log("factorial: "+product);