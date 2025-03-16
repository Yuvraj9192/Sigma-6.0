console.log(process);
console.log("************************************");
console.log("value of process.cwd(): ",process.cwd());
console.log("************************************");
console.log("value of process.argv: ",process.argv);

console.log(process.argv);

// adding arguments to the code
let args = process.argv;

for(let i = 2 ; i < args.length; i++){
    console.log("hello to ", args[i]);
}
