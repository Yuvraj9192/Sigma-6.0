function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num > 3){  // handling rejection
                reject("promise rejected!");
            }
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    // await getNum();
    // await getNum();
    // await getNum();
    // await getNum();
    // await getNum();

    // handling rejection
    try{
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    } catch(err){
        console.log("error caught!");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);
}


