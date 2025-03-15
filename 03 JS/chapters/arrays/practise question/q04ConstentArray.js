const arr = [1, 23, 56, 65];

console.log(arr);
arr.push(10);

console.log(arr);
arr.pop();
console.log(arr);

arr[1] = 20 ;
console.log(arr);

// error :-  we can't declare new arr using it or complete change it.
// arr = [12, 12, 56, 555, 1000];
// console.log(arr);