const { getUnpackedSettings } = require('http2');
function guessNumber() {
    // Create Interface where we can enter the number without stopping the program:
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // A Random Method which will help us choose a random number:
    let compGuess = Math.floor(Math.random() * 100);
    let guess;

    // Function that stores the question:
    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number(1 - 100): ', number => {
            guess = Number(number);

            // Check Player's Input:
            if (guess <= 100 && guess >= 0) {
                if (guess === compGuess) {
                    console.log('You guessed it!');
                    return readline.close();
                } else if (guess > compGuess) {
                    console.log('Too high!');
                    recursiveAsyncReadLine();
                } else if (guess < compGuess) {
                    console.log('Too low!');
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Please try again...');
                recursiveAsyncReadLine();
            }
        });
    }
    recursiveAsyncReadLine();
}

guessNumber();

