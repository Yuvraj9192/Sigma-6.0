const express = require("express");
const app = express();
const port = 8080;

//serving static files
// app.use(express.static("public")); // same level access
// parent level access
let path = require("path");
//we can access multiple static folder/files
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));


app.set("view engine", "ejs");// same level access

// Set the views directory
// let path = require("path");
app.set("views", path.join(__dirname, "/views"));// parent level access

app.get("/", (req, res) => {
    // res.send("this is root");
    res.render("home.ejs");
    // res.send("hello");
});

app.get("/rolldice", (req, res) => {
    // res.send("hello ji roll dices works");
    let diceValue = Math.floor(Math.random() * 6) + 1 ;
    res.render("rolldice.ejs", {diceValue});
})

app.listen(port, ()=> {
    console.log(`listening on port : ${port}`);
});

//creating a route for instagram
app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "smith", "andreo", "piter", "gill"];
    // let { username } = req.params;
    // console.log(`you searched for ${username}`);

    // getting data from another file
    const instaData = require("./data.json");
    let {username} = req.params;
    console.log(instaData);
    const data = instaData[username];
    console.log(data);
    if(data) {
        res.render("instagram.ejs", {data});
    } else{
        let msg = "no account found!";
        res.render("err.ejs", {msg});
    }
});