let img = document.querySelector('img');

console.log(img);

console.log(img.getAttribute('id'));
img.setAttribute('id', 'spiderManImg')
console.log("changed: ",img.getAttribute('id'));

img.setAttribute('src', "/03 JS/chapters/DOM/images/creation_3.jpeg");

img.setAttribute('class', 'image');
console.log(img.getAttribute('class'));

let heading = document.querySelector('h1');

heading.style.color = "pink";
heading.style.fontSize = "10rem";
heading.style.backgroundColor = "brown"

let links = document.querySelectorAll(".box a") ;
for(let i = 0 ; i < links.length ; i++){
    links[i].style.color = "orange";
}

let box = document.querySelector('.box');
box.classList.add("className2");
console.log(box.classList);
