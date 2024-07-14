// Higher or Lower
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber < secret) {
      return "Too low!";
    } else if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Too high!";
    }
  };
};

var guess = getGuesser();

/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) Play the game a few times.
 *    e.g. guess(2)
 *
 * There are three blocks of code covering the
 * three outcomes for a guess:
 * too low, too high or correct.
 *
 * 3) Update the second condition to
 *    (userNumber < secret)
 *
 * 4) Update the messages to match the
 *    new condition.
 *
 * 5) Swap the first and second conditions so
 *    the second condition uses the strict
 *    equality operator.
 *
 * 6) Update the messages to match the
 *    new condition.
 */

// Example usage
console.log(guess(2));  // Try guessing a number
console.log(guess(5));  // Try guessing another number
console.log(guess(8));  // Try guessing another number

  
  
  /* Further Adventures
   *
   * 1) Run the program
   *
   * 2) Play the game a few times.
   *    e.g. guess(2)
   *
   * There are three blocks of code covering the
   * three outcomes for a guess:
   * too low, too high or correct.
   *
   * 3) Update the second condition to
   *    (userNumber < secret)
   *
   * 4) Update the messages to match the
   *    new condition.
   *
   * 5) Swap the first and second conditions so
   *    the second condition uses the strict
   *    equality operator.
   *
   * 6) Update the messages to match the
   *    new condition.
   *
   */