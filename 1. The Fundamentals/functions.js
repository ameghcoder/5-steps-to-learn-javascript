/**
 * named,
 * anonymouse,
 * arrow
 */


// named function

// function printHello(){
//     return "Hello, Coder YRJ";
// }

// Anonymous function

// const printHello = function(){
//     return "Hello, Coder YRJ"
// }

// (function(_name = "World"){
//    console.log("Hello, " + _name)
// })("Coder YRJ")

// Arrow

const printHello = (_name = "Coder YRJ") => {
    return "Like, Subscribe " + _name;
}

console.log(printHello("World"));

// You learned in this file about named functions, arrow function and anonymous function and also default parameters