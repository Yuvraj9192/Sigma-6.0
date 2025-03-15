let url = "https://catfact.ninja/fact"; //api to get facts
let body = document.querySelector("body");


body.addEventListener('keypress', (event)=>{
    let fact = document.createElement('p');
    fetch(url)
    .then((res) => {
        console.log(res);
        res.json()
        .then((data) => {
            fact.innerText = data.fact;
            body.append(fact);
            });
    })
    .catch((err) => {
        console.log("ERROR : ",err);
    });
})
