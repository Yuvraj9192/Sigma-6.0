function genrateNum(upto, start) {
    let num = Math.floor(Math.random() * upto + start);
    return num;
}

for(let i = 0 ; i < 100; i++){
    console.log(genrateNum(5,0));
}