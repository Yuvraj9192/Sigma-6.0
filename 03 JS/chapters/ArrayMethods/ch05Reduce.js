// reduce function

let arr = [1, 2, 3, 4];

let ans = arr.reduce( (sum, curr) => (sum+curr) );
console.log(`total sum : ${ans}`);

// finding largest amoung arr

let nums = [215, 45, 75, 1, 78946, 879];

let getLargest = nums.reduce( (largest, current) =>{
    if(largest < current){
        return current;
    }else {return largest;}
});

console.log(getLargest);

// finding minimum number

let getMin = nums.reduce( (large, current) =>{
    if(large > current){
        return current;
    }else {return large;}
});

console.log(`min: ${getMin}`);