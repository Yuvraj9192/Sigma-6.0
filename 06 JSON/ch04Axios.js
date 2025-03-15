let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let factpara = document.createElement('p');


btn.addEventListener('click', async()=>{
    let fact = await getFact();
    console.log(fact);
    let p = document.querySelector('#result');
    p.innerText = fact;
});

async function getFact() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch (err) {
        console.log("error: ", err);
        return "nothing found pls try later";
    }
}