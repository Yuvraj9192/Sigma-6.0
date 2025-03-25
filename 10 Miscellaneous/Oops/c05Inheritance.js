
// class Student {
    //     constructor(name, age, marks) {
        //         this.name = name;
        //         this.age = age;
        //         this.marks = marks;
        //     }
        
        //     talk() {
            //         console.log(`Hi, I am ${this.name}`);
            //     }
            // }
            
            // let s1 = new Student ("yuvraj", 19, 100);
            // let s2 = new Student ("prem", 15, 53);
            
            // console.log(s1);
            // console.log(s2);
            
            
            // // another example
            
            // class Teacher {
                //     constructor(name, age, subject) {
                    //         this.name = name;
                    //         this.age = age;
                    //         this.subject = subject;
                    //     }
                    
                    //     talk() {
                        //         console.log("Hello students, I am ",this.name);
                        //     }
                        // }
                        
                        // let t1 = new Teacher("Vishal", 24, "Chemistry");
                        
                        // console.log(t1)
                        
// Inheritance

class person {
    constructor(name,age) {
        console.log("you are in person class constructor");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class student extends person {
    constructor(name, age, marks) {
        console.log("you are in student class constructor");
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends person {
    constructor(name, age, subject) {
        console.log("you are in teacher class constructor");
        super(name, age);
        this.subject = subject ;
    }
}

let s1 = new student("yuvraj", 19, 100);
let t1 = new Teacher("manjeet",36, "maths");

console.log(s1);
console.log(t1);