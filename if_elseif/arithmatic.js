var prompt = require('prompt-sync')();
var a = prompt("Enter the value of a : ");
var b = prompt("Enter the value of b : ");
var c = prompt("Enter the value of c : ");

let v1 = (a + b * c);
console.log("value1 is : " + v1);
let v2 = (c + a / b);
console.log("value2 is : " + v2);
let v3 = (a % b + c);
console.log("value3 is : " + v3);
let v4 = (a * b + c);
console.log("value4 is : " + v4);

let value_array = [v1, v2, v3, v4];

let max_value = Math.max.apply(null, value_array);
console.log("Maximum value is : " + max_value);

let min_value = Math.min.apply(null, value_array);
console.log("Maximum value is : " + min_value);