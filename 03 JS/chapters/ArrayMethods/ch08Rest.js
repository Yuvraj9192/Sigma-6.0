// Rest -> it takes arguments and convert it into an array

function sum(...args){ // arguments
    args[2] ="ram to yuvraj";
    for(let i = 0 ; i < args.length ; i++) {
        console.log("you gave us: ", args[i]);
    }
}

sum(1,2,"ram");