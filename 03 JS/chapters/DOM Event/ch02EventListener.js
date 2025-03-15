let btns = document.querySelector('button');

let greating = function() {
    console.log("good morning, ji!");
};

let say = function() {
    console.log("yuvi is a great coder.");
}

btns.addEventListener("click", greating);
btns.addEventListener("click", say);
btns.addEventListener("dblclick", function() {
    console.log("double click is working");
});


let p = document.querySelector('p');

p.addEventListener("click", greating);

let box = document.querySelector('.box');

box.addEventListener("click", function(){
    console.log("mpouse inside box");
});