async function PostData(url, data){
    const Obj = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
       
    };
    let result = await fetch (url, Obj);
    let jsonResult = await result.json();
    console.log(jsonResult);
}

const data = {
    name: "Suraj",
    email: "suraj@gmail.com",
};
PostData("https://jsonplaceholder.typicode.com/posts", data);

