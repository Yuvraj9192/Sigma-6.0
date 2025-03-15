const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const result = mergeObjects(
    {
        a:1,
        b:2
    },
    {
        c: 3,
        d: 4
    }
);

console.log(result);