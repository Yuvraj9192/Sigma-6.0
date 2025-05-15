const mongoose = require('mongoose');
const { schema } = mongoose ;

main().then((res) => {
    console.log("connection established");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema( {
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// inserting

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48
// });

// const user2 = new User({
//     name : "Eve",
//     email: "eve@gmail.com",
//     age: 49
// });

// user1.save();
// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Bruce", email: "brunce@gmail.com", age: 47},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.findOne({age: {$gte: 30}}).then((res) => {
//     console.log(res); // in form of a array
// }).catch((err) => {
//     console.log(err);
// });


// User.findOne({ name: "Bruce"  }).then((res) => {
//     console.log(res); // in form of a array
// }).catch((err) => {
//     console.log(err);
// });

//updates
/* User.updateOne({name: "Bruce"}, {age: 50}).then((res)=> {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }); */


// another way to update -> it show updated value
// User.findOneAndUpdate({name: "Bruce"}, {age: 62}, {new: true}).then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


//delete
// User.deleteOne({name: "Bruce"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//another way
User.findByIdAndDelete("68248e99f5e32dc5cef859ca").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})