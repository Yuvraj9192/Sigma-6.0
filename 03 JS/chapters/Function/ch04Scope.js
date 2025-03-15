// let sum = 54 ; //global

// function calSum(a, b) {
//     let sum = a + b ;// function scope
//     console.log(sum);
// }

// calSum(1,2);


//block scope

// {
//     let a = 25 ;
// }

// console.log(a);

// lexical scope

function outerFunc() {
    let x = 5 ;
    let y = 6 ;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}

outerFunc();