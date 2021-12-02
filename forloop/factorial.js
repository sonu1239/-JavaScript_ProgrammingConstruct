const prompt = require('prompt-sync')();

const n = Number(prompt("Enter integer: "));
if (n >= 0 && Number.isInteger(n)) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    console.log(n + "  " + factorial);
} else {
    console.log("Invalid user input.");
}