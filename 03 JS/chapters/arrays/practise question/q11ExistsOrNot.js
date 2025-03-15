let sentence = prompt("Enter a sentence: ");
let word = prompt("Enter a word: ");

if (sentence.includes(word)) {
    console.log("Found successfully at: " + sentence.indexOf(word));
} else {
    console.log("Not found!!!");
}
