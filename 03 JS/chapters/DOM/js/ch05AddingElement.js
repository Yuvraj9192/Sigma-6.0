let newPara = document.createElement('p');
newPara.innerText = "Hi, Yuvraj Sharma";

let body = document.querySelector('body');

body.appendChild(newPara);

let btn = document.createElement('button');
btn.innerText = "click me!"
btn.classList.add('blue');


body.appendChild(btn);


// btn.remove();
