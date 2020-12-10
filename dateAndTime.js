// Write a JavaScript program to display the current day and time in the following format. 
// Today is : Tuesday the 29th. 
// Current time is : 10 PM : 30 : 38
// 1 hour from now is : 11 PM : 30 : 38
// EXACTLY LIKE THAT

let d = new Date();
let date = d.getDate();
let day = d.getDay();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let oneHour = h + 1;
let currentDate = 'Today is : ' + day + ' the ' + date + 'th.';
let currentTime = 'Current time is : ' + h + ' : ' + m + ' : ' + s;
let timeInOneHour = '1 hour from now is : ' + oneHour + ' : ' + m + ' : ' + s;

if (h > 12) {
    h -= 12;
    h += ' PM';
} else {
    h += ' AM';
}

if (oneHour > 12) {
    oneHour -= 12;
    oneHour += ' PM';
} else {
    timeInOneHour += ' AM';
}

if (date = 01) {
    date += 'st';
} else if (date = 02) {
    date += 'nd';
} else if (date = 03) {
    date += 'rd';
} else {
    date += 'th';
}

switch (day) {
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednseday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
    case 0:
        day = 'Sunday'
        break;
}



console.log('Today is : ' + day + ' the ' + date + '.');
console.log('Current time is : ' + h + ' : ' + m + ' : ' + s);
console.log('1 hour from now is : ' + oneHour + ' : ' + m + ' : ' + s);