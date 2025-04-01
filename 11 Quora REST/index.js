const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");



app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        id: uuidv4(),
        username : "apnacollege",
        content : "i love coding!"
    },
    {
        id: uuidv4(),
        username: "yuvraj sharma",
        content: "eat code repeat"
    },
    {
        id: uuidv4(),
        username: "vivek yadav",
        content: "hard and keep it up"
    }
];
app.use(express.static(path.join(__dirname, "Public")));

app.get("/posts", (req, res) => {
    // res.send("server working well!!");
    res.render("index.ejs", {posts});
});

app.post("/post", (req,res) => {
    // console.log(req.body);
    let {username, content} = req.body;
    id = uuidv4();
    posts.push({id,username, content});
    // res.send("post request working! yeah");
    res.redirect("/posts");
});

app.get("/posts/new", (req,res) =>{
    res.render("new.ejs");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    // res.send("request is working!!");
    res.render("show.ejs", {post});
});

// app.get("/post/new", (req, res) => {
    //     res.render();
    // });
    
app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // res.send("patch is working yeah!!");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("deleted success");
    res.redirect("/posts");
});

app.listen(port, ()=> {
    console.log(`listening to port : ${port}`);
});