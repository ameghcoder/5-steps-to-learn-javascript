// localStorage.setItem("YT Channel", "Coder YRJ")

// console.log(localStorage.getItem("YT Channel"))

// localStorage.removeItem("YT Channel")

// localStorage.setItem("1", "01")
// localStorage.setItem("2", "02")
// localStorage.setItem("3", "03")
// localStorage.setItem("4", "04")
// localStorage.setItem("5", "05")

// localStorage.clear()

// sessionStorage.setItem("YT Channel", "Coder YRJ")

// console.log(sessionStorage.getItem("YT Channel"));
// sessionStorage.removeItem("YT Channel")

// sessionStorage.setItem("1", "01")
// sessionStorage.setItem("2", "02")
// sessionStorage.setItem("3", "03")
// sessionStorage.setItem("4", "04")
// sessionStorage.setItem("5", "05")

// sessionStorage.clear()

// sessionStorage.setItem("data", JSON.stringify(
//     {
//         channel: "Coder YRJ",
//         profession: "Developer"
//     }
// ))

// GEt the Geolocation cords

// if (
//     "geolocation" in navigator
// ) {
//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             // Success callback
//             const latitude = pos.coords.latitude
//             const logitude = pos.coords.logitude;

//             console.log(
//                 'Latitude', latitude,
//                 'Logitude', logitude
//             )
//         },
//         (err) => {
//             console.log(err.code);
//         }
//     )

// } else {
//     console.log("Your broswer not support geo location api")
// }

// Copy to Clipboard

let copyBtn = document.getElementById("copy-text");
let text = document.getElementById("text");

let pasteBtn = document.getElementById("paste-text")
let text2 = document.getElementById("text2");

// copyBtn.addEventListener("click", () => {

//     navigator.clipboard.writeText(text.value)
//         .then(() => {
//             console.log("Text copied to clipboard!")
//         })
//         .catch((err) => {
//             console.log("Failed to copy text: ", err);
//         })
// })

// pasteBtn.addEventListener("click", () => {
//     navigator.clipboard.readText()
//         .then((text) => {
//             text2.value = text;
//             console.log("Your text pasted successfully ")
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

if (navigator.share) {

    navigator.share({
        title: "Check out the cool blog post",
        text: "This blog is so awesome, you have to read this if you want to customize your website",
        url: 'https://gloztik.com'
    }).then(() => {
        console.log("Content Shared successfully")
    }).catch(() => {
        console.log("Error in sharing content")
    })

} else {
    console.log("Web Share API not supported in this browser")
}