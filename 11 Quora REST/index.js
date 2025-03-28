const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        username : "apnacollege",
        content : "i love coding!"
    },
    {
        username: "yuvraj sharma",
        content: "eat code repeat"
    },
    {
        username: "vivek yadav",
        content: "hard and keep it up"
    }
];

app.get("/posts", (req, res) => {
    // res.send("server working well!!");
    res.render("index.ejs", {posts});
});

app.use(express.static(path.join(__dirname, "Public")));

app.listen(port, ()=> {
    console.log(`listening to port : ${port}`);
});

app.get("/post/new", (req, res) => {
    res.render();
})