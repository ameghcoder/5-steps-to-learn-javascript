/**
 * Data Types
 * 
 * String - "name"
 * Number - 150 // 150.00
 * Boolean - true/false, 0/1, "", null is falsy
 * Undefined - let car; then car i undefined here
 * Null - nothing here/ empty
 * Object - {}, []
 * Symbol - 
 * Bigint - 
 * 
 */

/**
 * Object Datatype 
 * objects,
 * arrays,
 * dates,
 * maps,
 * sets,
 * intarrays, floatarrays, promises and more
 */

let length = 16

// console.log(typeof length);

let color = "yellow"
// console.log(typeof color)

// booleans
let x = true
// console.log(typeof x)

// object
const person = {
    fullName: 'John doe'
}

// console.log(typeof person)
// console.log(typeof person.fullName)

// array 
const carsName = [
    'bmw',
    'audi'
];

// console.log("Array: ", typeof carsName)

let y = "green"
// console.log(y)

y = "red"
// console.log(y)

y = 5
// console.log(y)


let z = 16 + "Yellow"

console.log(typeof z)

z = 16 + 4 + "Yellow"

console.log(z) //20Yellow

z = "Yellow" + 16 + 4

console.log(z) // Yellow164

let _name
console.log(typeof _name)

_name = 56
console.log("_name: ", typeof 56)

_name = null // -> empty or non exiting vlaue or not point to any value
console.log("_name: ", typeof _name)

if(null){
    console.log("Null is true")
} else{
    console.log("Null is false")
}

if(undefined){
    console.log("undefined is true")
} else{
    console.log("undefined is false")
}

let newName = new String("My name is JS")
console.log(typeof newName)
