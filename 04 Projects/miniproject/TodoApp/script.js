let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "X";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
});


ul.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(`${listItem.innerText} is deleted`);
        listItem.remove();
    } else {
        console.log(`don't delete`);
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns) {
//     delBtn.addEventListener('click', function(){
//         let par = this.parentElement;
//         console.log(par);
//         console.log("removed the task");
//     });
// }

// event delegation