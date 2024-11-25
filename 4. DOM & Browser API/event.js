console.log("Hello World")

let btn = document.getElementById("click_btn");

// btn.addEventListener("click", () => {
//     console.log("Clicked");
// })

// btn.addEventListener("mouseenter", () => {
//     console.log("Mouse Enter")
// })

// btn.addEventListener("mouseleave", () => {
//     console.log("Mouse Leave")
// })

let lists = document.getElementById("list-container");

// let liTag = document.querySelectorAll("li");
// console.log(liTag)

// liTag.forEach(li => {
//     li.addEventListener("click", (e) => {

//         console.log("li content ", e.target.innerText)
//     })
// })

lists.addEventListener("click", (e) => {
    if (
        e.target.tagName == "LI"
    ) {
        console.log(e.target.innerText);
    }
})