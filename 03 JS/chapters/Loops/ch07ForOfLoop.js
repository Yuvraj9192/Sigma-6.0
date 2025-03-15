let fruits = ["mango", "apple", "banana","litchi","orange"];

for(let fruit of fruits){
    console.log(fruit);
}


for(let char of "apnacollege"){
    console.log(char);
}

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];

for(let lists of heroes){
    for(hero of lists){
        console.log(hero);
    }
}