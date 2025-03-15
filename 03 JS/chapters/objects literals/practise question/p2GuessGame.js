let range = prompt("please enter range from 0 to what: ");

let copy = parseInt(range);

let rand = Math.floor(Math.random() * copy ) + 1;

let num = prompt("make a try : ");
while(1) {
    let guess = parseInt(num);
    if(guess === rand) {
        console.log("you won!!");
        break;
    } else if( num === "quite"){
        console.log("you quite!");
        break;
    } else{
        if(guess > rand) num = prompt("try a smaller,");
        else if (guess < rand) num = prompt("try higher,");
    }
}


