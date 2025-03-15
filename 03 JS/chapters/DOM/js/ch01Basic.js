document.all[8].innerText = "yuvraj";

document.getElementById("mainImg");

let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i < smallImages.length; i++) {
    smallImages[i].src = "/03 JS/chapters/DOM/images/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
}

document.getElementsByTagName("p")[1].innerText = "i have been changed!";