// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwdSelections = {
    pwdLength : 0,
    useUCase : false,
    useLCase : false,
    useNums : false,
    useSpecChars : false
  }
  
  // Get password length.
  pwdSelections.pwdLength = getPasswordLength();

  // If a valid password length was entered, continue with prompts.
    if (pwdLength >= 8 && pwdLength <= 128) {
      // Confirm to include upper case characters.
      pwdSelections.useUCase = confirm("Do you want to include upper case characters?");

      // Confirm to include lower case characters.
      pwdSelections.useLCase = confirm("Do you want to include lower case characters?");

      // Confirm to include numbers. Should be Y or N.
      pwdSelections.useNums = confirm("Do you want to include numbers?");

      // Confirm to include special characters.
      pwdSelections.useSpecChars = confirm("Do you want to include special characters?");

      // Validate that at least one character type was selected.
      if (pwdSelections.useUCase || pwdSelections.useLCase || 
        pwdSelections.useNums || pwdSelections.useSpecChars) {
        // Return a random password using the selections made by the user.
        return randomPassword(pwdSelections.pwdLength, pwdSelections.useUCase, 
              pwdSelections.useLCase, pwdSelections.useNums, pwdSelections.useSpecChars);
      }
      else {
        // If no option were selected then display alert that at least one option must be selected.
        alert("At least one character type must be selected.");
        return "No character types selected."
      };
    }
    else {
      // Alert that the password length is invalid.
      alert("The password length must be between 8 and 128.");
       return "Invalid length"
    };

    
  };
//}

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
    return pwdLength;
  }
  else {
      // Display an alert that the password length must be between
      // 8 and 128.
      //alert("The password length must be between 8 and 128.");
      return 0;
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
