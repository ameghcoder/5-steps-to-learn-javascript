//* Try/Catch

try{    

    //? Reference ERror
    // let age = 20;
    // if(ag >= 18) {
    //     console.log("You're adult")
    // }
    // else if(age < 18) {
    //     console.log("you're not eligible")
    // }

    console.log("Database is live")

    //? Type Error
    let number = 20;
    number.toUpperCase(); 

    console.log("Database connection is end")
} catch(err){
    if(err instanceof ReferenceError){
        console.log("This is a Reference Error");
    } else if(err instanceof TypeError){
        console.log("this is a type error")
    } else{
        console.log(err);
    }
} finally{
    console.log("Database connection is end with Finally")

}