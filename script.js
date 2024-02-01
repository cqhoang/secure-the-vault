// 1. build a vault that requires three mathematical calculations to generate the three codes in a combination
// 2. use the javascript console or the script block within an html page to create three variables
// 3. each variable will be the result of each calculation (three in total)
// 4. the combination of the lock is 10 - 40 - 39
// 5. use three different arithmetic operators that will generate each individual number
// 6. display the combination on the HTML page or in an alert popup

// message of the popup will be this
let message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// use arithmetic to decode the combination
const num1 = 5 * 2;
const num2 = 10 * 4;
const num3 = 38 + 1;
console.log(`message: ${num1}" + "${num2}" + "${num3}"`);
// create a popup for the combination message
alert(`${message} ${num1} - ${num2} - ${num3}`);
