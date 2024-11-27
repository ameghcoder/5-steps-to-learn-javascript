// Normal function
// function doubled(a){
//     return a * 2;
// }
// function _3x(a){
//     return a * 3;
// }
// function _4x(a){
//     return a * 4;
// }

// console.log(doubled(20));
// console.log(_3x(20));
// console.log(_4x(20));


// Curried Version

function curriedMultiply(b){
    return function(a){
        return b * a;
    }
}

const doubled = curriedMultiply(2);
const _3x = curriedMultiply(3);
const _4x = curriedMultiply(4);
const _5x = curriedMultiply(5);

console.log(doubled(20))
console.log(_3x(20))
console.log(_4x(20))
console.log(_5x(20))

console.log(
    curriedMultiply(2)(56)
)