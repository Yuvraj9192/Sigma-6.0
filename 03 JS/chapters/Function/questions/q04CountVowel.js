let str = "yuvraj sharma";

function countVowel(str){
    for(let i = 0 ; i < str.length ; i ++) {
        let count = 0 ;
        if(
            str.charAt(i) === 'a' ||
            str.charAt(i) === 'e' ||
            str.charAt(i) === 'i' ||
            str.charAt(i) === 'o' ||
            str.charAt(i) === 'u'
        ){
            console.log(`${i}: ${str.charAt(i)}`);
            count++;
        }
    }
    console.log(count);
}

console.log(countVowel(str));