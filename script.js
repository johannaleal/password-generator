// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Object to hold all user password selections
  var pwdSelections = {
    pwdLength : 0,
    useUpperCase : false,
    useLowerCase : false,
    useNums : false,
    useSpecChars : false
  };
  
  // Get password length.
  pwdSelections.pwdLength = getPasswordLength();

  // If a valid password length was entered, continue with prompts.
  // A valid password length must be a number from 8 to 128.
  if (pwdSelections.pwdLength >= 8 && pwdSelections.pwdLength <= 128) {
    // Confirm to include upper case characters.
    pwdSelections.useUpperCase = confirm("Do you want to include upper case characters?");

    // Confirm to include lower case characters.
    pwdSelections.useLowerCase = confirm("Do you want to include lower case characters?");

    // Confirm to include numbers. Should be Y or N.
    pwdSelections.useNums = confirm("Do you want to include numbers?");

    // Confirm to include special characters.
    pwdSelections.useSpecChars = confirm("Do you want to include special characters?");

    // Validate that at least one character type was selected.
    if (pwdSelections.useUpperCase || pwdSelections.useLowerCase || 
      pwdSelections.useNums || pwdSelections.useSpecChars) {
      // Return a random password using the selections made by the user.
      return randomPassword(pwdSelections.pwdLength, pwdSelections.useUpperCase, 
            pwdSelections.useLowerCase, pwdSelections.useNums, pwdSelections.useSpecChars);
    }
    // If no options were selected then display alert that at least one character type must be selected.
    else {
      alert("At least one character type must be selected.");
      return "No character types selected."
    };
  }
  else {
    // Alert that the password length is invalid.
    alert("The password length must be between 8 and 128.");
      return "Invalid length"
  };
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
    // if (pwdLength >= 8 || pwdLength <= 128) {

    // Return the password lenght.
    return pwdLength;
  }
  else {
      // Display an alert that the password length must be between
      // 8 and 128.
      //alert("The password length must be between 8 and 128.");

      // If it is not a valid password length, return 0.
      return 0;
    };
}

// This function accepts as parameters:
// pLength      - number for the password character count
// useUpperCase - boolean indicating whether to use upper case characters
// useLowerCase - boolean indicating whether to use lower case characters
// useNums      - boolean indicating whether to use numbers
// useSpecChars - boolean indicating whether to use special characters

function randomPassword(pLength, useUpperCase, useLowerCase, useNums, useSpecChars) {
  // Password string that will be returned.
  var pwd = "";

  // Initialize string of possible characters that will be used
  // to generate password.
  var charsToUse = "";

  // If Upper Case was selected then add all the upper case letters to 
  // the characters that can be used in password.
  if (useUpperCase) {
    charsToUse += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  // If Lower Case was selected then add all the lower case letters to
  // the characters that can be used in the password.
  if (useLowerCase) {
    charsToUse += "abcdefghijklmnopqrstuvwxyz";
  };

  // If Numbers were selected then add all the integers from 0 to 9 to
  // the characters that can be used in the password.
  if (useNums) {
    charsToUse += "0123456789";
  };

  // If Special Characters were selected then add special characters to
  // the characters that can be used in the password.
  if (useSpecChars) {
    charsToUse += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  };

  // Concatenate a random character from the charsToUse string for the length
  // of password entered.
  for (var i =1; i <= pLength; i++) {
    pwd += charsToUse[Math.floor(Math.random() * charsToUse.length)];
  };

  // Return the password created.
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
