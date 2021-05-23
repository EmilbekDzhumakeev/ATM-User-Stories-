"use strict";

/////////////////////// import files ///////////////////////// 
const prompt = require("prompt-sync")();
const { getBalance, validatePin, withdraw, deposit } = require("./atm");
//const atm = require("./atm");



console.log("hello world from index");   


getBalance();
userMenu();1
function userMenu(){ 

    while (validatePin()) {
        let userInput= prompt("What would you like to do? Choose: 1-View Balance,  2-Withdraw, 3-Deposit or 4");
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
             myTrip[3]=(random(entertainment));
         break;
         default: 
         console.log("Wrong input entry! Try again !");
         break; 
     }
} 

}