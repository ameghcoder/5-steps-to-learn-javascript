// Immutable Example
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Create a new array
// console.log(numbers);
// console.log(newNumbers);

// Mutable Example
const numberMutable = [1, 2, 3];
numberMutable.push(4); // Mutates the original array
console.log("Mutates Original: ", numberMutable);