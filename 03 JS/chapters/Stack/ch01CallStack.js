function helloGreat() {
    console.log("hello ji");
}

function demo(){
    helloGreat();
}

let calling = demo();


// second example

function one() {
    return 1;
}

function two() {
    return one() + one() ;
}

function three() {
    let ans = two() + one(); // breakpoint
    console.log(ans);
}

three();