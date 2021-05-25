"use strict";
 
/////////////////////// import files /////////////////////////   
let {balance, pin} = require("./account");  
let { pocketBalance } = require("./wallet");

const prompt = require("prompt-sync")(); 


//////////////////////////////////////////////////////////////  
function getBalance(){
    console.log("You balance is: "+ parseFloat(balance));
} 
//////////////////////////////////////////////////////////////  
function withdraw(){ 
    let amount = prompt("Enter wothdraw amount: "); 
    
    balance =parseFloat(balance) - parseFloat(amount);
    pocketBalance = parseFloat(pocketBalance) + parseFloat(amount);
    console.log("Wallet Balance: "+ pocketBalance);
} 
//////////////////////////////////////////////////////////////  
function deposit(){ 
    let amount = prompt("Enter deposit amount: "); 
  
    balance = parseFloat(balance) + parseFloat(amount);
    pocketBalance = parseFloat(pocketBalance) - parseFloat(amount);
    console.log("wallet Balance: "+ pocketBalance);
} 
//////////////////////////////////////////////////////////////  
function validatePin(){ 
    let userPin = prompt("Please enter your pin: ");
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