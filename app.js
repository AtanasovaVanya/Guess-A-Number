// Create Interface where we can enter the number without stopping the program:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// A Random Method which will help us choose a random number:
let compGuess = Math.floor(Math.random() * 100);

