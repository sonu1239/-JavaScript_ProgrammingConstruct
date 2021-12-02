const prompt = require('prompt-sync')();

const WEEKDAY = prompt('eNTER ANY NUMBER BETWEEN 1 TO 7 TO CHECK WEEK DAYS');

if (WEEKDAY == 1) {
    console.log("SUNDAY ");
} else if (WEEKDAY == 2) {
    console.log("MONDAY");
} else if (WEEKDAY == 3) {
    console.log("TUESDAY");
} else if (WEEKDAY == 4) {
    console.log("WEDNESDAY");
} else if (WEEKDAY == 5) {
    console.log("THURSDAY");
} else if (WEEKDAY == 6) {
    console.log("FIDAY");
} else if (WEEKDAY == 7) {
    console.log("SATURDAY");
} else {
    console.log("PLEASE ENTER A CORRECT WEEKDAY !");
}