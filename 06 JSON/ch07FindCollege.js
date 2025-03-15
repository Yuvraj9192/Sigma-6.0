let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');
btn.addEventListener('click', async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    let college = await getCollege(country);
    show(college);
});

function show(colList){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let col of colList){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(err){
        console.log("error found : ", err);
        return [] ;
    }
}
