var prompt = require('prompt-sync')();

//function to change into farenheit 
function degToFahre(degree) {
    let degreeToFahrenheit = (degree * 9 / 5) + 32;
    console.log("The fahrenheit value for entered value is " + degreeToFahrenheit);
}

//function to change into degree
function fahreToDeg(fahrenheit) {
    let FahrenheitTodegree = (fahrenheit - 32) * 5 / 9;
    console.log("The degree value for entered value is " + FahrenheitTodegree);
}

console.log("Enter \n1. to convert degree celcius to fahrenheit \n" +
    "2. to convert fahrenheit  to celcius ");
let convert = parseInt(prompt("your selection : "));
switch (convert) {

    case 1:
        {
            let degree = parseInt(prompt("Enter degree to convert to fahrenheit "));
            if (degree >= 0 && degree <= 100) {
                degToFahre(degree);
                break;
            } else
                console.log("Enter value between o to 100 degree");
            break;
        }
    case 2:
        {
            let fahrenheit = parseInt(prompt("Enter fahrenheit to convert to degree "));
            if (fahrenheit >= 32 && fahrenheit <= 212) {
                fahreToDeg(fahrenheit);
                break;
            } else
                console.log("Enter value between 32 to 212 fahrenheit");
            break;
        }
    default:
        console.log("Enter valid input 1 or 2");

}