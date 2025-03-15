// high order function

function multipleGreet(func, n){
    for(let i = 1; i <= n; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello, ji kaise ho aap?");
}

// console.log(multipleGreet(greet, 2));

multipleGreet(greet, 1010);