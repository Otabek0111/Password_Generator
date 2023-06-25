// Assignment code here
// create a generate password function that hold all the variables for different variables 
function generatePassword() {
  var numericCharacters = '0123456789'.split('');
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var specialCharacters = '@%+\/"!#$^?:,)(}{][~-_.'.split('');
  var possibleCharacters = [];

  // get input and validate
    var numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
      if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        return "Please enter a valid number of characters.";
      } else if (isNaN(numberOfCharacters)) {
        numberOfCharacters = prompt("Please enter a valid number.");
      }
      else {
        alert("Your password will be " + numberOfCharacters + " characters long.");
        
    }
  //Overall, this code is a simple way to gather user input and provide feedback based on their response.
  var hasLowercase = confirm("Do you want lowercase characters?");
    if (hasLowercase) {
      var turnToLowercase = alert("Your password will have lowercase characters.");
    }
    else {
      alert("Your password will NOT have lowercase characters.");
    }

  var hasUppercase = confirm("Do you want uppercase characters?");
    if (hasUppercase) {
      alert("Your password will have uppercase characters.");
    }
    else {
      alert("Your password will NOT have uppercase characters.");
    }

  var hasNumbers = confirm("Do you want to use numbers?");
    if (hasNumbers) {
      alert("Your password will have numbers.");
    }
    else {
      alert("Your password will NOT have numbers.");
    }

  var hasSpecial = confirm("Do you want special characters?");
    if (hasSpecial) {
      alert("Your password will have special characters.");
    }
    else {
      alert("Your password will NOT have special characters.");
    }

    if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
      return "Please select at least one character type.";
    };

  // each group of characters gets added to all the possible characters to make the random password from
    if (hasLowercase) { 
      possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    }
    if (hasUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    }
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
    }
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

  // randomly picks a object from the possible characters and makes a random password from the needed number of characters
  var finalPassword = ""
    for (let i = 0; i < numberOfCharacters; i++) {
      var rng =[Math.floor(Math.random() * possibleCharacters.length)];
      // this is used to concatenate a randomized character from the list of possible characters to the current final password string.
      finalPassword = finalPassword + possibleCharacters[rng];
    
    }
    return finalPassword;
  };

// selects the HTML element with the ID "generate" and assigns it to a variable called "generateBtn." This allows you to manipulate that specific HTML element using JavaScript.
var generateBtn = document.querySelector("#generate");

//  It starts by calling the "generatePassword" function to create a new password. It then selects the HTML element with the ID of "password" and assigns the newly generated password as its value.
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button and this allows us to start generating the password.
generateBtn.addEventListener("click", writePassword);




