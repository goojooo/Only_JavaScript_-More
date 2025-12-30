//while loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username ;
let password;

while(!loggedIn){
    username = prompt("Enter Username")
    password = prompt("Enter password")

    if(username === "admin@123" && password === "pass@123"){
        loggedIn = true;
        console.log("Your logged in!..");
    }
    else{
        console.log("Invalid credintials!.. Please try again");

    }
}