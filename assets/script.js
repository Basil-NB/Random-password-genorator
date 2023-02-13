// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var prompt1 = window.prompt("How many characters does your password need?")
  var prompt2 = confirm("Select OK to add special characters.")
  var prompt3 = confirm("select OK to add numbers.")
  var prompt4 = confirm("select OK to add lowercase letters.")
  var prompt5 = confirm("select OK to add uppercase letters.")



}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);