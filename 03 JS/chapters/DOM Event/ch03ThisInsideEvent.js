let btn = document.querySelector('button');
let heading = document.querySelector('h1');
let subHeading = document.querySelector('h2');
let p = document.querySelector('p');

let changeColor = function() {
    console.log(this);
    console.log(this.innerText);
    this.classList.add('blue');
}

btn.addEventListener('click', changeColor);
heading.addEventListener('click', changeColor);
subHeading.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);