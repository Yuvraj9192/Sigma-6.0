let country = ["australia", "germany", "united states of america"];

function findLarg(arr){
    let ans = arr[0];
    for(let i = 1; i < country.length ; i++) {
        if(arr[i].length > ans.length) {
            ans = arr[i];
        }
    }
    return ans;
}

console.log(findLarg(country));