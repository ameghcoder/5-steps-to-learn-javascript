
// API

// fetch()
// GET method use

// fetch("https://api.restful-api.dev/objects")
// .then(resp => {
//     return resp.json();
// })
// .then(resp => {
//   console.log(resp)
// })
// .catch(error => {
//     console.log(error)
// })

// POST METHOD use



// fetch(
//     "http://localhost:3001/api/persons",
//     {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(addData)
//     }
// )
// .then(resp => {
//     return resp.json();
// })
// .then(resp => {
//     console.log(resp)
// })
// .catch(error => {
//     console.error(error)
// })

// DELETE METHOD
// fetch(
//     "http://localhost:3001/api/persons/2",
//     {
//         method: "DELETE"
//     }
// )
// .then(resp => {
//     return resp.json();
// })
// .then(resp => {
//     console.log(resp)
// })
// .catch(error => {
//     console.error(error)
// })


//* JSON modification

let addData = { 
    "name": "Coder YRJ", 
    "number": "040-8593456"
}

console.log(addData);

let jsonString = JSON.stringify(addData);
console.log(typeof jsonString)

let parseJson = JSON.parse(jsonString);
console.log(typeof parseJson);
console.log(parseJson)

