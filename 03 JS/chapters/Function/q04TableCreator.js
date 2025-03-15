let num = 2;

createTable(num);

function createTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }
}
