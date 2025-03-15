
function findSum(num) {
    let sum = null;
    for(let i = num ; i > 0 ; i--) {
        sum += i ;
    }
    return sum;
}


let num = 15 ;
console.log(findSum(num));