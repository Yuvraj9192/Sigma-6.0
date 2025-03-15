// write a function that prints "hello world" 5 times at intervals of 2s each.

// count = 0 ;
// let xyz = setInterval( () => {
//     console.log("hello, world!");
//     count++;
//     if(count === 5) clearInterval(xyz);
// },2000);

// or another way

let xyz = setInterval( () => {
    console.log("hello, world!");
},1000);

console.log("hello ji.");

setTimeout(() => {
    clearInterval(xyz);
}, 10000);




