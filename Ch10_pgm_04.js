// Guess the random number
// Function to generate a random number between two values (inclusive)
var between = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Updated getGuesser function with secret number between 30 and 50
var getGuesser = function () {
  var secret = between(30, 50);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  };
};

var guess = getGuesser();



// Example usage
console.log(guess(32));  // Example guess
console.log(between(1, 5));  // Example random number between 1 and 5
console.log(between(100, 200));  // Example random number between 100 and 200

  
  /* Further Adventures
   *
   * 1) Run the program.
   *
   * 2) Play the game a few times on the console.
   *    e.g. guess(2)
   *
   * 3) Change the code so the secret number is
   *    between 30 and 50.
   *
   * 4) Test your changes.
   *
   * CHALLENGE: Create a function called 'between'
   * that returns a random whole number between two
   * numbers passed as arguments.
   *
   * e.g. between(1, 5)      //   1 <= whole number <= 5
   *      between(100, 200)  // 100 <= whole number <= 200
   *
   */