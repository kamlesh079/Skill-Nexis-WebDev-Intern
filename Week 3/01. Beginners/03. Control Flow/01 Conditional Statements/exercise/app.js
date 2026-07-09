// 1. Create variable name (password) store nothing.
let password1;

// 2. If password is equal to 8 print "Welcome"
if (password1 === 8) 
    console.log("Welcome");

// 3. If password is less then or equal to 8 print "Password is too short"
else if(password1 <= 8) 
    console.log("Password is too short");

// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
else if(password1 >= 8){
    onsole.log("Too long password");
    console.log("Password should be 8 characters");
}

// 5. If all fails print "Please provide a password."
else 
    console.log("Please provide a password");


// Solution By HuXn

let password;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
