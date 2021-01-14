// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for length of password.
  var pwdLength = Number(prompt("Enter size of password. Must be between 8 and 128."));

  // Prompt to include upper case characters. Should be Y or N.
  var pwdUCase = prompt("Do you want to include upper case characters? (Y or N)");

  // Prompt to include lower case characters. Should be Y or N.
  var pwdLCase = prompt("Do you want to include lower case characters? (Y or N)");

  // Prompt to include numbers. Should be Y or N.
  var pwdNumeric = prompt("Do you want to include numbers? (Y or N)");

  // Prompt to include special characters. Should be Y or N.
  var pwdSpecialChars = prompt("Do you want to include special characters? (U or N)");

  if (pwdLength >= 8 && pwdLength <= 128) {
    return pwdLength;
  }
  else {
    alert("The password length must be between 8 and 128.");
    return "Invalid length"
  }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
