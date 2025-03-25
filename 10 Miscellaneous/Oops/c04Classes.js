class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("adam", 21);
let p2 = new Person("yuvraj", 19);

console.log(p1);
console.log(p2);