const COUNT = 5;
const numArray = [];
for (i = 0; i < COUNT; i++) {
    numArray[i] = Math.floor((Math.random() * 899) + 100);
}
let maxNum = numArray[0];
let minNum = numArray[0];

for (i = 0; i < COUNT; i++) {
    if (numArray[i] > maxNum) {
        maxNum = numArray[i];
    }
    if (numArray[i] < minNum) {
        minNum = numArray[i];
    }
}
console.log("max number is " + maxNum);
console.log("min number is " + minNum);