let jsonData = `{
"fact":"The average cat can jump 8 feet in a single bound, nearly six times its body length!",
"length":83,
"age" : 12,
"name" : "yuvraj sharma"
}`;

let validRes = JSON.parse(jsonData);
console.log(validRes.fact);


