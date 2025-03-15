// factory function


function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
        console.log(!(n%2==0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
        console.log(n%2==0);
        }
        return even;
    } else{
        console.log("wrong request!!");
    }
}

let request = prompt("enter a value true or false: ");
