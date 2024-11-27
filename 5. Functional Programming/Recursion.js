// 5! 120 -> 5 * 4 * 3 * 2 * 1 

// function factorial(n){
//     if(n == 0) return 1;

//     return n * factorial(n - 1);
// }

// console.log(factorial(1000));

// factorial(5) 
// 5 * factorial(4) -> 5 * 24 => 120
//     4 * factorial(3) -> 4 * 6
//         3 * factorial(2) -> 3 * 2
//             2 * factorial(1) -> 2 * 1
//                 1 * factorial(0) -> 1 * 1


const tree = {
    name: "root",
    children: [
        { name: "child1", children: [] },
        { name: "child2", children: [
            { name: "grandchild1", children: [] },
            { name: "grandchild2", children: [
                { name: "greatGrandChild", children: [] },
            ] }
        ] },
    ],
};


function printAllName(obj){
    console.log(obj.name);
    obj.children.forEach(printAllName);
}

printAllName(tree);