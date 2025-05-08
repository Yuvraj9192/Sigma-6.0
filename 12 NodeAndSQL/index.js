const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
const app = express();

const port = 3025;

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Yuvraj@020306'
});

let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

// let data = [];
// for(let i = 0; i <= 100; i++){
//     data.push(createRandomUser());
// }

// let users = [
//     ["24wdwa73158", "tejas", "tejas.si055@gmail.com", "launda@123$"],
//     ["24wdwa73485", "mohit", "pineapple_45@yahoo.com", "ms@6789gve"]
// ];
// let q1 = `INSERT INTO user (id, username, email, password) VALUE ?`;
// try{
//     connection.query(q1, [users], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         console.log(result.length);
//     });
// }catch(err) {
//     console.log(err);
// }
// connection.end();

// console.log(createRandomUser());

app.listen(port, () => {
    console.log(`app is listening to ${port}`);
});

let q = "SELECT COUNT(*) FROM user";
app.get("/", (req, res) => {
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["COUNT(*)"];
            // console.log(result);
            res.render("home.ejs", {count});
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/user", (req, res) => {
    let q = "SELECT * FROM user";
    try{
        connection.query(q, (err, users) => {
            if (err) throw err;
            // console.log(users);
            res.render("user.ejs", {users});
        })
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            console.log(user);
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("sorry there is some error in DB");
    }
});

app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let { formPass, newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("wrong pass!");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.post("/user/create", (req,res) => {
    res.render("create.ejs");
});

app.post("/user/add", (req, res)=>{
    let { id, username, email, pass } = req.body;
    let q = `INSERT INTO user (id, username, email, password) VALUE (?, ?, ?, ?)`;
    let values = [id, username, email, pass];
    try{
        connection.query(q, values, (err, result) => {
            if (err) throw err;
            // console.log(newUser);
            res.redirect("/user");
        })
    }catch(err){
        console.log(err);
        res.send("something went wrong!");
    }
});

app.delete("/user/:id/destroy", (req, res) => {
    let { id } = req.params;
    let q = "DELETE FROM user WHERE id = ?";

    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        console.log(err);
        res.send("Something went wrong!");
    }
});
