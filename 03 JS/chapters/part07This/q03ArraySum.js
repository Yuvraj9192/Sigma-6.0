let arrSum = (arr) => {
    sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
};


let ans = arrSum([2,4,6,8,10]);
console.log(`array Average : ${ans}`);