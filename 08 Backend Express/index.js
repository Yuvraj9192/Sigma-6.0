// handling the request
// sending the responses
// routing
// working of nodemon to automatically detect the change and restart the server.
// path parameters
// Query Strings

const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is a basic response");
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // })
// });

app.get("/", (req, res) => {
    console.log("Request received");
    // let code = "<h1>Fruits</h1> <br> <ul> <li>mango</li> <li>apple</li> <li>banana</li></ul> <br/> <p> this is a change without restarting the server </p>";
    let code = "hello, i am root";
    res.send(code);
});

// app.get("/search", (req, res) => {
//     console.log("Request received");
//     let code = `<input type="text" placeholder="search">`;
//     res.send(code);
// });

app.get("/help", (req, res) => {
    console.log("Request received");
    let code = `<button style="background-color: red; color: white">
                contact us
                </button>`;
    res.send(code);
});


// path parameters
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    const { username, id } = req.params;
    res.send(`hello, this profile belongs to ${username} with id pass ${id}`);
});

// request parameters
app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).send("Please provide a search query.");
    }
    res.send(`Search result for query: ${q}`);
});









// if anything doesnot works then show this 
app.get("*", (req, res) => {
    res.send("this path does not exits :(");
});