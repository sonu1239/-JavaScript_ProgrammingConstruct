var prompt = require('prompt-sync')();

let year = prompt("enter year to check leap or not ");

if ((year%4==0 && year%100!=0) || (year%400==0)){           //condition for checking leap year

console.log(year +" year is leap year");
}
else 
console.log(year +" year is not leap year");