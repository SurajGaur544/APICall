async function DataFetch(url) {
    let result = await fetch(url); // returns data in ReadableStream format - using promises
    let jsonResult = await result.json();
    console.log(jsonResult);
    document.getElementById("para").innerHTML = jsonResult;
}
DataFetch("https://jsonplaceholder.typicode.com/todos/1");