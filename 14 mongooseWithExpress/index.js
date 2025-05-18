const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const { render } = require('ejs');
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("app is listening");
})

main().then(()=>{
    console.log("connection with data base formed");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

// let chat1 = new Chat({
//     from: "yuvraj",
//     to: "tejasvi",
//     msg: "we are 1 percentage",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

app.get("/", (req, res) => {
    res.send("this is working");
});


//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("chats loaded");
    res.render("index.ejs", {chats});
});

// new chat
app.get("/chats/new", (req, res) => {
    res.render("newchat.ejs");
});

// inserting the new chat
app.post("/chats/add", (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat(
        {
            from : from,
            to: to,
            msg: msg,
            created_at: new Date()
        }
    );
    newChat.save().then((res) => {
        console.log("chat is sent");
    }).catch((err) => {
        console.log(err);
    });
    console.log(newChat);
    // res.send("working");
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit",async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//update route
app.put("/chats/:id/",async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(id,
        {msg: newMsg},
        {runValidators: true, new:  true}
    );
    // console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id",async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});