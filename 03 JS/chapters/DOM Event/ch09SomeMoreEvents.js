// mouseout event

let btn = document.querySelector('button');

btn.addEventListener('mouseout', function(event){
    console.log("mouseout works");
});

// keypress event

let inp =  document.querySelector('input');

inp.addEventListener('keypress',function(event){
    console.log("keypress is working now");
});

// scroll

window.addEventListener('scroll', function(){
    if(window.scrollY > 400) {
        document.body.style.backgroundColor = "orange";
    } else {
        document.body.style.backgroundColor = "pink";
    }
});


window.addEventListener('load', function(){
    console.log("dom is created");
});

