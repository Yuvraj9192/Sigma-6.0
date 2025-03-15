let btn = document.querySelector("button");

btn.addEventListener("click", function (event){
    console.log(event);
    console.log("button clicked");
});

btn.addEventListener("dblclick", function (event){
    console.log(event);
    console.log("button clicked");
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("a key was pressed!");
});

// inp.addEventListener("keyup", function(){
//     console.log("a key was released!");
// });
