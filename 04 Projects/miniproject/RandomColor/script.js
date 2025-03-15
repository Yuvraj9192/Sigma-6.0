const randomValue = (num1, num2, num3) => `rgb(${num1},${num2},${num3})`;

let btn = document.querySelector('.genBtn');
let rgbDisplay = document.querySelector('.rgbDisplay');
let bgcolor = document.querySelector('.colorBox');

const generateColor = () => {
    let red = Math.floor(Math.random() * 255) + 0;
    let green = Math.floor(Math.random() * 255) + 0;
    let blue = Math.floor(Math.random() * 255) + 0;

    let finalRgbValue = randomValue(red, green, blue);

    rgbDisplay.innerText = finalRgbValue;
    bgcolor.style.backgroundColor = finalRgbValue;
    document.querySelector('body').style.backgroundColor = randomValue(red/2 , green/2, blue/2);
};

btn.addEventListener('click', generateColor);

// generateColor();
