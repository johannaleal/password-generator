// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt for length of password.
  var pwdLength = getPasswordLength();

  // Prompt to include upper case characters. Should be Y or N.
  var pwdUCase = prompt("Do you want to include upper case characters? (Y or N)").toUpperCase();

  // Prompt to include lower case characters. Should be Y or N.
  var pwdLCase = prompt("Do you want to include lower case characters? (Y or N)").toUpperCase();

  // Prompt to include numbers. Should be Y or N.
  var pwdNumeric = prompt("Do you want to include numbers? (Y or N)").toUpperCase();

  // Prompt to include special characters. Should be Y or N.
  var pwdSpecChars = prompt("Do you want to include special characters? (Y or N)").toUpperCase();

  // Validate that the length entered was between 8 and 128.
  if (pwdLength < 8 || pwdLength > 128) {
    alert("The password length must be between 8 and 128.");
    return "Invalid length"
  }
  // Validate that at least one character type was selected.
  else if (pwdUCase !== "Y" && pwdLCase !== "Y" && pwdNumeric !== "Y" && pwdSpecChars !== "Y") {
    alert("At least one character type must be selected.");
    return "No character type selected."
  }
  else {
    return randomPassword(pwdLength, pwdUCase == "Y", pwdLCase == "Y", pwdNumeric == "Y", pwdSpecChars == "Y");
  }
}

// Function to get password length.
function getPasswordLength() {
  // Declare password length variable.
  var pwdLength;

  // Prompt user for length of password. The password must be between 8 and 128 
  // characters in length.
  pwdLength = prompt("Enter length of password. Must be between 8 and 128.");

  // If a password length entered is a number then validate the length.
  if (!isNaN(pwdLength)) {
    // Convert the password length string to a number.
    pwdLength = Number(pwdLength);

    // Validate that the number entered is between 8 and 128.
    if (pwdLength >= 8 || pwdLength <= 128) {
      return pwdLength;
    }
    else {
      // Display an alert that the password length must be between
      // 8 and 128.
      alert("The password length must be between 8 and 128.");
      return 0;
    };
  };
}

function randomPassword(pLength, uCase, lCase, nums, specChars) {
  // Password string that will be returned.
  var pwd = "";

  // String of possible characters that will be used
  // to generate password.
  var charsToUse = "";

  // If Upper Case was selected then add all the upper case letters.
  if (uCase) {
    charsToUse += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  // If Lower Case was selected then add all the lower case letters.
  if (lCase) {
    charsToUse += "abcdefghijklmnopqrstuvwxyz";
  };

  // If Numbers were selected then add all the integers from 0 to 9.
  if (nums) {
    charsToUse += "0123456789";
  };

  // If Special Characters were selected then add special characters.
  if (specChars) {
    charsToUse += "!#$%&*";
  };

  // Concatenate a character from the charsToUse string for the length
  // of password entered.
  for (var i =1; i <= pLength; i++) {
    pwd += charsToUse[Math.floor(Math.random() * charsToUse.length)];
  };

  return pwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
