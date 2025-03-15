let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event){
    console.log("code = ", event.code);

    if(event.code === "KeyW"){
        console.log("accelrate");
    } else if (event.code === "KeyS"){
        console.log("brake applied/back");
    } else if( event.code === "KeyD") {
        console.log("turing right");
    } else if(event.code === "KeyA") {
        console.log("turing left.");
    }
});