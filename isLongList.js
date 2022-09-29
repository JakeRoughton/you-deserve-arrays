const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "))

let myBool = userArray.length
if (myBool <10){
console.log("You do not have the minimum amount of characters")
} else if (myBool >=10)
console.log("You have the minimum amount of characters!!")
