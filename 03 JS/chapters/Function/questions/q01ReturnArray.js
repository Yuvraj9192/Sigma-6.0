let Bigger = function(arr, x){
    let cpy = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > x){
            cpy.push(arr[i]);
        }
    }
    return cpy;
};

console.log(Bigger([8,9,10,1,2,3,4,5,6,7], 5));