const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection established");
}).catch((err) =>{
    console.log("some error occured");
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    auhtor: {
        type: String,
    },
    price: {
        type: Number
    }
});

const Book = mongoose.model("Book", bookSchema);

/* let book2 = new Book({
//     tittle: "How to kill a Mockingbird",
//     author: "Harper Lee",
//     price: 3576
// }); */

/*book2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});*/
