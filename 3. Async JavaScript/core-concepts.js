//      callbacks
//     promises
//     .then().catch()
//     async/await
//     event loop

// function print(callback, a, b){
//     return callback(a, b);
// }

// function callback(a, b){
//     return a + b;
// }

// console.log(print(callback, 12, 25))

// console.log("Hi")

//* Promises | .then and .catch

// function fetchData(url){
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then(resp => {
//           return resp.json();
//         })
//         .then(resp => {
//             console.log("Resolve")
//             resolve(resp);
//         })
//         .catch(error => {
//             console.log("Error");
//             reject(error.message)
//         })
//     })
// }

// console.log("End")

//* async/await

let api = "http://localhost:3001/api/persons/1";
async function fetchData2(){
    const response = await fetch(api);

    if(!response.ok){
        throw new Error('Network response was not ok')
    }

    const data = await response.json(); // Parse the data if successful
    console.log(data);
}

// fetchData2();

//*event loop
