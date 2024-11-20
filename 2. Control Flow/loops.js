// for(expression1; expression2; expression3){

// }

/**
 *
    expression1 - initialization
                    is executed (one time) before the execution of the code block
    expression2 - defines the condition for executing the code block
    expression3 - is executed (every time) after the code block executed
*/


// for(let i = 10; i > 0; i--){
//     console.log(i * 2);
// }

// expression1

// while(expression2){

//     // code block

//     expression3;
// }

// let i = 1;

// while (i < 10) {
//     // code block
//     console.log(i);

//     // i++;
// }

//* for...of

// let arr = [1, 2, 3, 4, 5];
// let str = "Coder YRJ";
// let num = "123";

// for(const value of num){
//     console.log(value);
// }

//* for...in

// let arr = [1, 2, 30, 4, 5]; // index -> key

// let obj = {
//     name: "Coder YRJ",
//     profession: "developer"
// }

// for(const key in arr){
//     console.log(key, arr[key]);
// }

//* do...while

// let i = 10;

// do{
//     // code block
//     console.log(i);

//     i++;
// }while (i < 10)

//* Array.prototype.forEach()

const arr = ["map", "filter", "reduce", "every", "some"];

// arr.forEach(val => {
//     console.log(
//         val, 
//         " number of characters in this string - ", 
//         val.length);    
// })

for(let name in arr){
    if(arr[name].length == 5) continue;
    console.log(arr[name]);
}