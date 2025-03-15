let fruits = ["mango", "apple", "litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits[0]);
console.log(fruits);

//this explains that although you can make some change in array but not in string
console.log(fruits[0][1]);
fruits[0][1] = 'x';
console.log(fruits[0][1]);

fruits[0] = undefined;
console.log(fruits);
console.log(fruits.length);
