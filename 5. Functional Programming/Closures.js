// function outer(count = 0){
    
//     return function inner(){
//         count++;

//         return count;
//     }
// }


// const increment = outer();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3
// console.log(increment()); // 4


function count(count = 0){
    
    return function increment(){
        count++;
        return count;
    }
}

const increment = count();

document.getElementById("click").addEventListener("click", () => {
    document.getElementById("value").innerText = increment();
})


