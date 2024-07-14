// Guess the number - the else clause
var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Unlucky, try again.");
  }
};

// Testing with different inputs
console.log("Test Case 1:");
guess(8);  // Outputs: Well done!
console.log("\nTest Case 2:");
guess(2);  // Outputs: Unlucky, try again.
console.log("\nTest Case 3:");
guess(10); // Outputs: Unlucky, try again.
console.log("\n");

// Updated version using !== operator
var guessUpdated = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Incorrect guess, try again.");
  } else {
    console.log("Well done!");
  }
};

// Testing updated version with different inputs
console.log("Updated Test Case 1:");
guessUpdated(8);   // Outputs: Well done!
console.log("\nUpdated Test Case 2:");
guessUpdated(2);   // Outputs: Incorrect guess, try again.
console.log("\nUpdated Test Case 3:");
guessUpdated(10);  // Outputs: Incorrect guess, try again.



/* Further Adventures
 *
 * 1) Run the program and try a few guesses at the prompt.
 *    e.g. guess(2)
 *
 * You can check if two values are NOT equal
 * by using the !== operator.
 *
 * 2) Change the condition in parentheses to check
 *    if the guess is not equal to the secret.
 *
 *    if (userNumber !== secret)
 *
 * 3) Run and test the updated program.
 *
 * 4) Change the messages to fit the new condition.
 *
 */