// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1 ;
//     if(internetSpeed > 4){
//         success();
//         return data;
//     } else {
//         failure();
//     }
// }

let name = "yuvraj";
let surname = "sharma";
let userId = "yuvi_987";

// saveToDb(
//     name,
//     () => {
//     console.log("your name saved: ", name);
//     saveToDb(
//         surname,
//         () => {
//             console.log("your surname saved: ", surname);
//             saveToDb(
//                 userId,
//                 () => {
//                     console.log("your username saved: ", userId);
//                 },
//                 () => {
//                     console.log("Error fix your internet speed");
//                 }
//             );
//         },
//         () => {
//             console.log("due to slow internet not saved!!");
//         }
//     );
//     },
//     () => {
//     console.log("weak connection. data not saved!");
//     }
// );

// how promise made it easier

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

let req = saveToDb(name); // req -> promise object
req
    .then(() =>{
    //promise was resolved
    console.log("your name was saved : ", name);
    req = saveToDb(surname);
    req
        .then( () => {
            console.log("your surname was saved: ", surname);
            req = saveToDb(userId);
            req
                .then(() => {
                    console.log("your username was saved: ", userId);
                })
                .catch(() => {
                    console.log("slow internet was founded!");
                })
        })
        .catch(() => {
            console.log("slow internet founded");
        })
    })
    .catch(() => {
        //promise was rejected
        console.log("slow internet founded!");
    })