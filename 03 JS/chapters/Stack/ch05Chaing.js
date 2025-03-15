let name = "yuvraj";
let surname = "sharma";
let userId = "yuvi_987";


function saveToDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
        if(internetSpeed > 4) {
            success("success: data was saved");
        } else{
            failure("failure: weak connection");
        }
    });
}

let req = saveToDb(name);

// req
//     .then(() =>{
//     console.log("your name was saved : ", name);
//     req = saveToDb(surname);
//     return req;
//     })

//     .then(() => {
//         console.log("your surname was saved: ", surname);
//         req = saveToDb(userId);
//         return req;
//     })

//     .then(() => {
//         console.log("your username was saved: ", userId);
//     })
        
//     .catch(() => {
//         console.log("slow internet founded!");
//     })

req
    .then((result) =>{
    console.log("your name was saved : ", name);
    console.log("result of promises: : ", result);
    req = saveToDb(surname);
    return req;
    })

    .then((result) => {
        console.log("your surname was saved: ", surname);
        console.log("result of promises: : ", result);
        req = saveToDb(userId);
        return req;
    })

    .then((result) => {
        console.log("your username was saved: ", userId);
        console.log("result of promises: : ", result);
    })
        
    .catch((error) => {
        console.log("slow internet founded!");
        console.log("error of promises: : ", error);
    })