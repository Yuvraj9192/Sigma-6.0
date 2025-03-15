let todo = [];

let req = prompt("please enter your request: ");

while(true){
    if(req == "quite"){
        console.log("quitting app");
        break;
    }

    if(req == "lists") {
        console.log("_________________");
        for(let i=0; i <todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_________________");
    } else if(req == "add"){
        let task = prompt("please enter a task to add: ");
        todo.push(task);
        console.log("added successfully");
    } else if(req == "delete"){
        console.log(todo);
        let idx = prompt("enter task s.no: ");
        todo.splice(idx, 1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }

    req = prompt("please enter your request: ");
}
