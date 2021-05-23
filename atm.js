"use strict";
 
/////////////////////// import files /////////////////////////   
const {balance, pin} = require("./account");  

const prompt = require("prompt-sync")(); 


//////////////////////////////////////////////////////////////  
function getBalance(){
    console.log("You balance is: "+ balance);


} 
//////////////////////////////////////////////////////////////  
function withdraw(){

} 
//////////////////////////////////////////////////////////////  
function deposit(){

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