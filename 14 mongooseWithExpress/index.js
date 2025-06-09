const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const { render } = require('ejs');
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("app is listening");
});


main().then(()=>{
    console.log("connection with data base formed");
}).catch((err) => {
    console.log(err);
});

async function main() {
    // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
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
    // throw new ExpressError(404, "server down :( ");
    res.render("newchat.ejs");
});

// inserting the new chat
app.post("/chats/add",async (req, res, next) => {
    try{
        let { from, to, msg } = req.body;
        let newChat = new Chat(
            {
                from: from,
                to: to,
                msg: msg,
                created_at: new Date()
            }
        );

        // newChat.save().then((res) => {
        //     console.log("chat is sent");
        // }).catch((err) => {
        //     console.log(err);
        // });
        await newChat.save();
        // res.send("working");
        res.redirect("/chats");
    }catch(err) {
        next(new ExpressError(404, "please fill names"));
    }
});

function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err)); 
    }
}

// NEW - show route
// app.get("chats/:id", async(req, res, next) => {
//     let { id } = req.params;
//     let chat = await chat.findByid(id);
//     res.render("edit.ejs", {chat});
// })


//edit route
app.get("/chats/:id",async (req, res, next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new ExpressError(404, "chat not found!"));
    }
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


// mongoose error

const handleValidationErr = (err) => {
    console.log("this is a validation error. please follow rules");
    console.dir(err);
    return err;
}

app.use((err, res, req, next) => {
    console.log(err.name);
    if(err.name === "CastError") {
        err = handleValidationErr(err);
    }
    next(err);
});

// custom error handler middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error detected!" } = err;
    res.status(status).send(message);
});