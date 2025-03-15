let carBrand = ["audi", "Land Rover", "Tata", "Mahindra"];
console.log(carBrand);

carBrand.push("honda");
console.log(carBrand);

carBrand.pop(3);
let discardCar = carBrand.pop();
console.log(discardCar);
console.log(carBrand);

carBrand.unshift(discardCar);
console.log(carBrand);

carBrand.unshift("BMW");
console.log(carBrand);

carBrand.shift();
// let discardCard = carBrand.shift();
// console.log(discardCar);
console.log(carBrand);


let colorName = ["red", "yellow", "blue"];
console.log(colorName);

console.log("red at: "+colorName.indexOf("red"));
console.log("pink present ? ,"+colorName.includes("pink"));
