let num = [21,56,78,12,999,45,326,45];

let larger = -Infinity;
let largest = -Infinity;
for(let i = 0 ; i < num.length ; i++) {
    if(num[i] > largest) {
        larger = largest;
        largest = num[i];
    }else if(num[i] < largest){
        if(num[i] > larger){
            larger = num[i];
        }
    }
}

console.log("largest: ",largest);
console.log("larger: ",larger);