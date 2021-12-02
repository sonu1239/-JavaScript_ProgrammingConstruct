const prompt = require('prompt-sync')();

const num = parseInt(prompt('Enter a number to find its prime factors '));
let temp = num;
let i = 2;
process.stdout.write("The prime factors of number are: ")
while (temp > 1) {
    if (temp % i == 0) {
        process.stdout.write(i + " ");
        temp = temp / i;
    } else {
        i++;
    }
}