let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// // callbacks nesting -> callback hell
// changeColor(("red"), 1000, () => {
//     changeColor("orange", 1000, ()=> {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

let req = changeColor("red", 1000);

req
    .then((result) => {
        console.log("status: ", result);
        return changeColor("orange", 1000);
    })

    .then((result) => {
        console.log("status: ", result);
        return changeColor("green", 1000);
    })

    .then((result) => {
        console.log("status: ", result);
        return changeColor("yellow", 1000);
    })

    .then((result) => {
        console.log("status: ",result);
        return changeColor("blue", 1000);
    })

    .then((result) => {
        console.log("status: ",result);
        console.log("all color done!!!!");
    })
