// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var prompt1 = parseInt(prompt("How many characters does your password need?"))
  var prompt2 = confirm("Select OK to add special characters.")
  var prompt3 = confirm("select OK to add numbers.")
  var prompt4 = confirm("select OK to add lowercase letters.")
  var prompt5 = confirm("select OK to add uppercase letters.")

  var passwordOptions = "";
  if (prompt2) {
    passwordOptions += "!@#$%^&*()_+-=[]{}|;':,.<>/?\\";
  }
  if (prompt3) {
    passwordOptions += "0123456789";
  }
  if (prompt4) {
    passwordOptions += "abcdefghijklmnopqrstuvwxyz";
  }
  if (prompt5) {
    passwordOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var password = "";
  for (var i = 0; i < prompt1; i++) {
    password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }

  return("Your new password is: " + password);
  
} 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);