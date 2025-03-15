let url = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector("img");
let btn = document.querySelector('button');


btn.addEventListener('click', async() => {
    console.log("you clicked button");
    let message = await getImg();
    
    image.src = message;
});

async function getImg(){
    try{
        let img = await axios.get(url);
        return img.data.message ;
    } catch (err){
        console.log("image not found!", err);
    }
}

