const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const newChat = require("newChat");

main().then(() => {
    console.log("connected with database");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


let allChats = [
    {
        from: "vishal",
        to: "mohak",
        msg: "hello mohak cigi available?",
        created_at: new Date()
    },
    {
        from: "divroop",
        to: "arun",
        msg: "arun bhai aa rhe ho kya?",
        created_at: new Date()
    },
    {
        from: "prem",
        to: "saurabh",
        msg: "bhai mera v job lgwa de na 20k wala",
        created_at: new Date()
    },
    {
        from: "nikhil",
        to : "yuvraj",
        msg: "class nhi lagana hai kya?",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
