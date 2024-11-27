// Pure Functions
function add(a, b){
    return a + b; // Always return the same output for the same input
}

// Impure Functions

let total = 20;
function addImpure(a){
    total += a;
    return total;
}

// Side effect: modifies the external variable 'total'


console.log(addImpure(2))