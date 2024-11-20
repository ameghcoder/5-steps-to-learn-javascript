//* Map method

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.map((val) => {
//     return val > 3;
// })

// console.log(newArr);


//* Filter method

// const newArr1 = arr.filter(val => {
//     return val > 3;
// })

// console.log(newArr1);

// For example if we use forEach
//// const newArr1 = [];
//// const newArr1 =  arr.forEach((val) => {
////     return (val * 8);
//// })

//* reduce
// const newArr2 = arr.reduce((previousValue, value) => {
//     return previousValue + (value * 2)
// }, 10)

// console.log(newArr2);

//* every 
const arr = [1, 2, 3, 4, 5, 6];

let output = arr.every(val => {
    return val > 3;
})

let output1 = arr.some(val => {
    return val > 3;
})
console.log(output);
console.log(output1);