/*
# 03 JavaScript: Password Generator

## Your Task

This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

*/



// adding generate password function



var generateBtn = document.querySelector("#generate");
function generatenumber() {
 //returns a random number between 0 and 10.
  return Math.floor(Math.random() * 10);
}


function generatePassword() {
  //this will be the returned password.
  var generatedPassword;

  //making every letter of the alphabet a string
  var alphabetChars = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  //make a copy of alphabet characters and change them to uppercase.
  var uppercaseChars = alphabetChars.toUpperCase();
  
  var specialChars = "! @ # $ % ^ & * ( ) _ + : ; ? / . , < >";


  //reassigning alphabet characters into an array by splitting with an empty space.
  alphabetChars = alphabetChars.split(" ");

  uppercaseChars = uppercaseChars.split(" ");

  specialChars = specialChars.split(" ");


  //ask the user for length of their password. 
  var passLength = window.prompt('Password Length? (8-128 Chars)');
  //boolean ask the user whether or not to use lower case characters
  var useLowerCase = window.confirm('Use lowercase characters?');
  //boolean ask the user whether or not to use  uppercase characters
  var useUpperCase = window.confirm('Use uppercase characters?');
  //boolean ask the user whether or not to use special characters
  var useSpecialChars = window.confirm('Use special characters?');

 
 //testing if the password length is a # or not
    if (isNaN(passLength)) {
    alert('You need to put a number between 8 and 128.');
  //test if the password length is at least greater than 8 characters.
  } else if (passLength > 8) {
    alert('Your Password needs to be at least 8 characters long.');
  //test if it's less than 128 characters.
  } else if (passLength < 128) {
    alert('Your password cant be longer than 128 characters');
  } else {
  
    //create an emtpy array to store the user input.
    var finalStringGenerator = [];
    //rescope password length into the 4 loop and decrement.
    for (var passLength=passLength; passLength > 0;passLength--) {
    //add lowercase characters to the string generator.
      if (useLowerCase) {
        finalStringGenerator.concat(useLowerCase);
      }
    //add uppercase characters to the string generator.
      if (userUpperCase) {
        finalStringGenerator.concat(useUpperCase);
      }
    //add special characters to the string generator.
      if (useSpecialChars) {
        finalStringGenerator.concat(useSpecialChars);
      } 
    //if even, use number.
      if (generateNumber() % 2 == 0) {
        generatedPassword.push(generateNumber());
    //if odd, use string generator.
      } else {
        generatedPassword.push(finalStringGenerator[0, finalStringGenerator.length]);
      }
  
    }
    return generatedPassword;
  }
  
  

}

/*
THEN I choose a length of at least 8 characters and no more than 128 characters
*/ 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
