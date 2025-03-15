let w1 = "i";
let w2 = "am";
let w3 = "yuvi";

let str = [w1, w2, w3];

function combo(str){
    let sentence = "";
    for(let i = 0 ; i < str.length ; i++) {
        sentence += str[i];
    }
    return sentence;
}

console.log(combo(str));

