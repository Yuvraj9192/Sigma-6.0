const person = {
    name: prompt("enter person name: "),
    age: prompt("enter person age: "),
    city: prompt("enter person city: "),
};

let add = prompt("want to add property: ");

if(add.toLowerCase() === "yes") {
    console.log(person);
    while(true){
        let what = prompt("add property name: ");
        person[what] = prompt("please give value for " + what + ": ");
        console.log("property added!");
        add = prompt("want to add more or edit: ");
        if(add.toLowerCase() === "no"){
            console.log("final list: ", person);
            break;
        }
        else if(add.toLowerCase() === "edit"){
            let edit = prompt("want to edit: ");
            if(edit.toLowerCase() === "yes"){
                console.log(person);
                let what2 = prompt("look and say what to edit: ");
                person[what2] = prompt("please update value for " + what2 + ": ");
                let what = prompt("add property name: ");
                if(what === "no") break;
            }
        }
    }
}
