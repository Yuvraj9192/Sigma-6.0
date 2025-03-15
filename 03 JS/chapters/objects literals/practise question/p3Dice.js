let dics = Math.floor(Math.random() * 6) + 1;
let copy = parseInt(dics);
let guess = prompt("guess your number : ");
while(true) {
    guess = parseInt(copy);
    if(guess === copy){
        console.log("you find that!!!! yeah");
        break;
    } else if(guess == "quite"){
        console.log("you loose the match");
        break;
    } else {
        copy = prompt("make an another try : ");
    }
}