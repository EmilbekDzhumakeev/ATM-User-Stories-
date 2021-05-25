"use strict";

/////////////////////// import files ///////////////////////// 
const prompt = require("prompt-sync")(); 
let {pocketBalance} = require("./wallet");  
const { getBalance, validatePin, withdraw, deposit } = require("./atm");

console.log("Welcome to Node ATM!");   
console.log("Wallet balance: "+ pocketBalance); 

if (validatePin()){ 
userMenu();} 
else {console.log("Try again next time...");}

/////////////////////////////////////////////////////////////////////
function userMenu(){ 
    
  let proceed;
    while (proceed!=="quit") {
        let userInput= prompt("What would you like to do? Choose: 1-View Balance,  2-Withdraw, 3-Deposit or 4-Quit transaction: ");
     switch (userInput) {
         case "1":
            getBalance();
         break; 
         case "2":
           withdraw();
         break;  
         case "3":
           deposit();
         break; 
         case "4":
            proceed = "quit";
         break;
         default: 
         console.log("Wrong input entry! Try again !");
         break;  
         
     }
} 

} 
console.log("Thank you for using Node ATM have a great day!");