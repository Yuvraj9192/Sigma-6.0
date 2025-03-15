// Async Function -> async and await keyword

async function greet() {
    throw "weak connection";
    return " hello world!";
}

// let hello = async() => {};

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("data: ",result);
    })
    .catch((err) => {
        console.log("error: ",err);
    })

let demo = async() => {
    return 5;
};



