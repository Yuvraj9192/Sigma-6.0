// onclick
// onmouseenter

let btns = document.querySelectorAll('button');

for(btn of btns) {
    btn.onclick = sayHello;
    // btn.onmouseenter = "sayHello()";
    console.dir(btn);
}

function sayHello () {
    alert("hello!");
}