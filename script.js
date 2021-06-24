// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '`', '~', '|', '<', '>', '=', '-', '_']; 

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]; 

var superArray = [];




var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

  function generatePassword(){
    var welcomeMessageToUser = confirm('Welcome to password generator wizard. you will be selecting length and at least 1 character type, ready to begin? yes / no ');
  console.log(welcomeMessageToUser);

  if (welcomeMessageToUser === true) {
    console.log('Yay!!! They love my wizard and want to use it');
  } else {
    alert('Your LOSS');
    // window.close();
  };

  var lengthMsg = parseInt(prompt('How many characters would you like your password to be? Must be between 9 - 128 characters.')); 
  console.log(lengthMsg)

  if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
    console.log('Yay, they can count!!!');
  } else {
    alert('Wrong, try again!');
    console.log('They cannot count. How sad.'); 
  };



    var lowerCaseMsg = confirm('Would you like the password to include lower case characters?'); 
    console.log(lowerCaseMsg)

    if (lowerCaseMsg === true) {
      console.log('Throw in the little guys!!!');
      superArray = superArray.concat(lowerCase);
    } else {
      alert('Nothing wrong with the little guys, jerk!');
      console.log('Lower case is out!'); 
    };  


      var upperCaseMsg = confirm('Would you like the password to include upper case characters?'); 
      console.log(upperCaseMsg)
    
      if (upperCaseMsg === true) {
        console.log('Bring in the big guns!');
        superArray = superArray.concat(upperCase);
      } else {
        alert('Nothing wrong with that!');
        console.log('Here come the big boys...'); 
      };  


        var numbersMsg = confirm('Would you like the password to include numbers?'); 
        console.log(numbersMsg)
      
        if (numbersMsg === true) {
          console.log('Yay, math!!!');
          superArray = superArray.concat(numbers);
        } else {
          alert('You probably wouldn\'t get it anyway.');
          console.log('Hope they can count.'); 
        };  


          var specialCharactersMsg = confirm('Would you like the password to include special characters?'); 
          console.log(specialCharactersMsg)
        
          if (specialCharactersMsg === true) {
            console.log('Let\'s get weird...');
            superArray = superArray.concat(specialCharacters);
          } else {
            alert('Boring!');
            console.log('This is getting special!'); 
          }; 
            

            var password = '';

            for (var index = 0; index < lengthMsg; index++) {
              
              var randomNumber = Math.floor(Math.random() * superArray.length); 
              password += superArray[randomNumber]
            }

            return password; 
  }





// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);








