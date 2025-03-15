const student = {
    name: "yuvraj",
    age: 19,
    marks: 94.5,
    city: "rajpura",
    gender: undefined
};

student.city = "mumbai";
student.gender = "male";

console.log(student);

console.log(student.city);
console.log(student.gender);
delete student.gender;
console.log(student);