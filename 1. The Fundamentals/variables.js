///* var - global scope, function scope

// var a = 'javascript'

// console.log(a)

// function print(){
//     var b = 'python'

//     if(true){
//         var c = 'cpp'
//     }

//     console.log('Hello', a);
//     console.log('Hello', b);
//     console.log('Hello', c);
// }
    
// print()

// -> Hoisting

// console.log(d);
// var d = 'Django';

// -> redeclare

// var e = 150

// console.log(e)

// var e = 200

// console.log(e)


///* let -> is mutable, block Scope, global scope, function scope

// -> redeclare - not allowed (in same scope)
// -> hoisting - not allowed

// let _name = 'JavaScript'

// function printGreet(){
//     let _name = 'CPP';

//     if(true){ // -> block Scope
//         let _name = 'Python'
//     }

//     console.log("Hello", _name);
// }

// printGreet();

//// console.log(_name5)
//// let _name5 = 'Python'; 

///* Const is immutable - function scope, global scope, block scope

// -> redeclare - not allowed (in same scope)
// -> hoisting - not allowed

// const _name = 'HTML';


// function printConst(){
//     const _name2 = 'Python';

//     if(true){
//         const _name3 = 'CSS';
//     }

//     console.log(_name3)

//     console.log(_name2)
// }

// printConst()
// // console.log(_name2);