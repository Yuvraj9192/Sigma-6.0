let fav = "avatar";
console.log("quit: to stop.")
let guess = prompt("make a guess: ");


while(true) {
    if(guess === fav) {
        console.log("you won :) ");
        break;
    }
    else if (guess === "quit") {
        console.log("you lose :( ");
        break;
    }
    else{
        guess = prompt("try something else: ");
    }
}