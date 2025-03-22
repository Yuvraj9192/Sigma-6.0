const express = require("express");
const app = express();
const port = 8080;

//to get data from post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, ()=> {
    console.log("listening to port : ",port);
});

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Get response, Welcome Mr. ${user}`);
});

app.post("/register", (req, res) => {
    console.log(req.body);
    let {user: username, password: pass} = req.body;
    res.send(`Post response, welcome Mr. ${username}`);
});