let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("#level");

document.addEventListener("keypress", function(){
    if( started == false) {
        console.log(started);
        started = true;
    }

    levelUp();
});

function btnFlash(btn) {
    btn.classList.add(".btnFlash");
    setTimeout(function() {
        btn.classList.remove(".btnFlash");
    }, 200);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}