let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
];
for(let i = 0 ; i < heroes.length; i++) {
    console.log(`Lists #${i}`);
    for(let j = 0 ; j < heroes[i].length ; j++){
        console.log(heroes[i][j]);
    }
}

let student = [
    ["aman",95], ["yuvi",98], ["karan",100]
];

for(let i = 0 ; i < student.length; i++){
    console.log(`#student : ${i+1}(info)`);
    for(let j = 0 ; j < student[i].length ; j++){
        console.log(student[i][j]);
    }
}