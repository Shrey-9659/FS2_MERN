// A modern, cleaner way to write async code.
// async - makes a function return a promise.
// await - pauses the execution until the promise resolves.

// one await is equals to one .then


const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then((rawData) => {
//     return rawData.json()
// }) 
// .then(res =>{
//     console.log(res)
// })

// const getData = async () => {
//     const data = await fetch(url);
//     const response = await data.json();
//     console.log(response)
// }

// getData();

async function getNumber(){
    return 42;
}
let result = await getNumber();
// result
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })

// console.log(result)