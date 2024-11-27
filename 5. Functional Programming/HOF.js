// Custom Higher Order Function
function higherOrder(fn, x){
    return fn(x);
    // return greet("Coder YRJ")
}


function greet(name){
    return "Hello, " + name;
}

const newFunc = higherOrder(greet, "Coder YRJ");

console.log(newFunc);

// console.log(higherOrder(greet, "Coder YRJ"))