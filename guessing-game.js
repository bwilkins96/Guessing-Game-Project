const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function checkGuess(num, secretNumber) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

const askNumber = (secretNumber, numAttempts) => {
    console.log("Guesses left: " + numAttempts);
    console.log("----------------------------------")
    rl.question('Enter a guess: ', (guess) => {
        let check = checkGuess(Number(guess), secretNumber);

        numAttempts--;
        if (numAttempts === 0 && !check) {
            rl.close();
            console.log("You lose :(");
            console.log(`The number was ${secretNumber}!`)
            console.log("Thanks for playing! :)")
            return;
        }

        if (check) {
            console.log("You win!!!!");
            console.log("Thanks for playing! :)")
            rl.close();
        } else {
            console.log("----------------------------------");
            askNumber(secretNumber, numAttempts);
        }
      });
}

const randominRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

const askRange = numAttempts => {
    rl.question('Enter a min: ', enteredMin => {
        rl.question('Enter a max: ', enteredMax => {
            let secretNumber = randominRange(Number(enteredMin), Number(enteredMax));
            askNumber(secretNumber, numAttempts);
        });
    });
}

const askLimit = () => {
    rl.question("Enter a number of guesses: ", num => {
        let numAttempts = num;
        askRange(numAttempts);
    })
}

console.log("Welcome to my JavaScript guessing game!");
setTimeout( () => console.log("---------------------------------------"), 1000);
setTimeout( () => console.log("When prompted, type your response and press 'enter'"), 2000);
setTimeout(askLimit, 4000);
