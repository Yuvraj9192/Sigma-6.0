let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
    console.dir(form);
    console.log(form.elements);

    // best practise way
    let user = this.elements[0];
    let pass = this.elements[1];
    alert(`hi ${user.value}, your pass set to be : ${pass.value}`);

    // another common majduri way
    // console.log(inp);
    // console.dir(inp);
    // console.dir(inp.value);

    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`hi ${user.value}, your pass set to be : ${pass.value}`);

});