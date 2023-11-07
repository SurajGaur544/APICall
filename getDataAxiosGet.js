async function getDataAxios(url){
    let result = await axios.get(url); // return data axios = using promises
    console.log(result);
}
getDataAxios("https://jsonplaceholder.typicode.com/todos/1");