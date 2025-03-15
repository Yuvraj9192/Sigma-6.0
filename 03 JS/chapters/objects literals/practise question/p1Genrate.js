// genrate from 1 to 100
//                                    upto  from
let rand = Math.floor(Math.random() * 100 + 1);

for(let i = 1 ; i < 100 ; i++){
    console.log(rand);
    rand = Math.floor(Math.random() * 100 + 1);
}