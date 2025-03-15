let start = ['january', 'july', 'march', 'august'];

let deleted = [];
deleted[0] = start.shift();
deleted[1] = start.shift();
console.log("deletd: "+deleted);
console.log("updated: "+start);

start.unshift("july","june");
console.log("final: "+start);
