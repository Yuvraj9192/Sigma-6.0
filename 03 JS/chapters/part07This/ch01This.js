// this.

const student = {
    name: "yuvraj",
    age: 19,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3 ;
        console.log(`Average of ${this.name} = ${avg}.`);
    }
}

console.log(student.getAvg());