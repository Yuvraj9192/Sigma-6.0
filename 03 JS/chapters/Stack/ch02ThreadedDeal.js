// js is single threaded -> synchrous nature(sequence wise execution)

setTimeout( () => { // callback or setTimeout make it Asynchrous 
    console.log("apna college");
}, 2000);

setTimeout( () => {
    console.log("hello world");
}, 2000);

console.log("Hello ji");