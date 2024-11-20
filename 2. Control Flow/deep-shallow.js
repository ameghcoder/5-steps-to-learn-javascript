// Shallow - not Deep 
// Deep - Deep

const $ = e => document.querySelector(e);

const originalObj = {
    a : 1,
    b : {
        c : 2
    }
}

// const shallowCopy = {...originalObj} // Using spread operator

// console.log(shallowCopy);

// shallowCopy.b.c = 42

// shallowCopy.a = 5

// console.log(shallowCopy);

// console.log(originalObj);

//* using structuredClone()
// const deepCopy = structuredClone(originalObj);

// console.log("before change the deepcopy: ");
// console.log("dc: ", deepCopy);
// console.log("obj: ", originalObj);

// deepCopy.b.c = 42;

// console.log("after change the deepcopy: ");
// console.log("dc: ", deepCopy);
// console.log("obj: ", originalObj);


//* using JSON

const deepCopy = JSON.parse(JSON.stringify(originalObj));

// console.log("before change the deepcopy: ");
// console.log("dc: ", deepCopy);
// console.log("obj: ", originalObj);

// deepCopy.b.c = 42;

// console.log("after change the deepcopy: ");
// console.log("dc: ", deepCopy);
// console.log("obj: ", originalObj);

//* destructuring


const arr = [2, 4];

// const x = arr[0]
// const y = arr[1]

// const [x, y] = arr;
// let [x, y] = [...arr];


// console.log(x)
// console.log(y)


const obj1 = {
    fname: "coder",
    lname: "YRJ"
}

let {fname, lname} = obj1;

console.log(fname)
console.log(lname)
