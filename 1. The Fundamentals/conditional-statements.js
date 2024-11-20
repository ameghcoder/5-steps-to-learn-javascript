let email = "arc";
let password = "1234";
let fullName = "s";

if(email != "" && password != "" && fullName != ""){
    console.log("You're logged in")
} else if(email == ""){
    console.log("Email is not defined")
} else if(password == ""){
    console.log("Password is not defined")
} else{
    console.log("Full Name is not defined")
}



// Switch statement

let weekday = "Tuesday";

switch (weekday) {
    case "Sunday":
        console.log("Good Morning", weekday);
        break;
    case "Monday":
        console.log("Start Your Work", weekday);
        break;

    default:
        console.log("Unavailble Weekday")
        break;
}