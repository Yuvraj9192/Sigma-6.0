let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers: {Accept: "Application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err){
        console.log("error: ", err);
    }
}