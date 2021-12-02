let arg1 = process.argv[2]; // taking command line arg 
let arg2 = process.argv[3];
let date = arg1;
let month = arg2;

if (month == 'march' || month == 'april' || month == 'may' || month == 'june') {
    if (month == 'march') {
        if (date > 20 && date <= 31) {
            console.log(true);
        } else
            console.log(false);
    } else if (month == 'april') {
        if (date > 0 && date <= 30) {
            console.log(true);
        } else
            console.log(false);
    } else if (month == 'may') {
        if (date > 0 && date <= 31) {
            console.log(true);
        } else
            console.log(false);
    } else if (month == 'june') {
        if (date > 0 && date <= 20) {
            console.log(true);
        } else
            console.log(false);
    }
} else {
    console.log(false);
}