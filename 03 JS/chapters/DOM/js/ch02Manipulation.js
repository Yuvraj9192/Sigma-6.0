let para = document.querySelector('p');

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

let heading = document.querySelector('h1');

console.log(heading.innerText);

// heading.innerHTML = "<u>spider Man</u>";

// another way
heading.innerHTML = `<u>${heading.innerText}</u>`;

