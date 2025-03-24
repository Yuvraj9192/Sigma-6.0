function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`hi, my name is ${this.name}`);
}

let p1 = new Person("yuvi", 21);
let p2 = new Person("mohak", 19);

console.log(p1);
console.log(p2);

// console.log(p1.this === p2.this);