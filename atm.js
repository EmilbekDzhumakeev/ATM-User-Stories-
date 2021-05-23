"use strict";
 
/////////////////////// import files /////////////////////////   
let {balance, pin} = require("./account");  
let { pocketBalance } = require("./wallet");
balance -= 20;
pocketBalance += 20;
const prompt = require("prompt-sync")(); 


//////////////////////////////////////////////////////////////  
function getBalance(){
    console.log("You balance is: "+ balance);
} 
//////////////////////////////////////////////////////////////  
function withdraw(){ 
    let amount = prompt("Enter wothdraw amount: "); 
    
    balance -= amount;
    pocketBalance += amount;
    console.log("wallet Balance: "+ pocketBalance);
} 
//////////////////////////////////////////////////////////////  
function deposit(){ 
    let amount = prompt("Enter deposit amount: "); 
  
    balance += amount;
    pocketBalance -= amount; 
    console.log("wallet Balance: "+ pocketBalance);
} 
//////////////////////////////////////////////////////////////  
function validatePin(){ 
    let userPin = prompt("Please enter your pin!");
if (parseInt(userPin) === pin){
    return true; }
    else { console.log("Incorrect pin!");
        return false;}

} 
//////////////////////////////////////////////////////////////  
/////////////////////// export files ///////////////////////// 
module.exports = {
    getBalance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    validatePin: validatePin
} 