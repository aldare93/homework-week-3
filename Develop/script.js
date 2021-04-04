// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var numericCharacters = '0123456789';
var specialCharacters =  ' !#$%&()*+,-./:;<=>?@[\]^_{|}~ ';
var passwordCharacters = []

document.getElementById("lowercase").addEventListener("click", function(event){
  // console.log("success lowercase");
  // console.log(event.target.checked);
  if (document.getElementById("lowercase").checked === true) { 
    passwordCharacters.push(lowercaseCharacters)
 } else {
   var passwordAssign = passwordCharacters.filter(function(i) {
    i !== lowercaseCharacters 
   })
   passwordCharacters = passwordCharacters.filter(function(i) {
    i !== lowercaseCharacters 
   })
 }
 console.log(passwordCharacters);
});

document.getElementById("uppercase").addEventListener("click", function(event){
  // console.log("success uppercase");
  // console.log(event.target.checked);
  if (document.getElementById("uppercase").checked === true) { 
    passwordCharacters.push(uppercaseCharacters)
 } else {
   passwordCharacters = passwordCharacters.filter(function(i) {
    i !== uppercaseCharacters 
   })
 }
 console.log(passwordCharacters);
});

document.getElementById("numeric").addEventListener("click", function(event){
  // console.log("success numeric");
  // console.log(event.target.checked);
  if (document.getElementById("numeric").checked === true) { 
    passwordCharacters.push(numericCharacters)
 } else {
   passwordCharacters = passwordCharacters.filter(function(i) {
    i !== numericCharacters 
   })
 }
 console.log(passwordCharacters);
});

document.getElementById("specialCharacters").addEventListener("click", function(event){
  // console.log("success special");
  // console.log(event.target.checked);
  if (document.getElementById("specialCharacters").checked === true) { 
    passwordCharacters.push(specialCharacters)
 } else {
   passwordCharacters = passwordCharacters.filter(function(i) {
    i !== specialCharacters 
   })
 }
 console.log(passwordCharacters);
});

document.getElementById("characterLimit").addEventListener("click", function(event){
  console.log("success limit");
  console.log(event.target.value);
});

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // concat(passwordCharacters) = passwordText
  console.log(passwordCharacters.join(""))
  


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// document.getElementById("lowercase").addEventListener("click", lowercaseCharacters);
// document.getElementById("uppercase").addEventListener("click", uppercaseCharacters);
// document.getElementById("numeric").addEventListener("click", numericCharacters)
// document.getElementById("specialCharacters").addEventListener("click", specialCharacters)