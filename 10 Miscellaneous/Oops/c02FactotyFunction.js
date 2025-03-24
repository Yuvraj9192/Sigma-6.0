// factory function

function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        }
    };

    return person;
}

let p1 = personMaker("yuvi", 21);
let p2 = personMaker("mohak", 19);