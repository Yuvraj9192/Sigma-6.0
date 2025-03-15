
const accountInfo = {
    userName: "yuv.i____",
    profile: true,
    bio:{
        name : "YS",
        info : "Yuvraj Bhardwaj Believe you can 21* || BCA 27' Bihar"
    },
    post: 35,
    follower: 54,
    following: 143
};

const post = {
    userName: "@yuv.i____",
    content: "video",
    likes: 256,
    reposts: 145,
    tags: "#like #comment #trend"
};

// one way of getting values //
// console.log(accountInfo);
// console.log(post);

// console.log(accountInfo);
// console.log(accountInfo.userName);
// console.log(accountInfo.bio.info);

// another way of getting the value 
console.log(accountInfo["bio"]["info"]);
