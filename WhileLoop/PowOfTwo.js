const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number: "));

if (n >= 0 && Number.isInteger(n)) {
    while (true) {
        let power = Math.pow(2, n)
        if (power <= 256) {
            console.log("2^" + n + " = " + power);
            break;
        } else {
            console.log("Maximum reached");
            break;
        }
    }
} else {
    console.log("Enter only non-negative integers.");
}