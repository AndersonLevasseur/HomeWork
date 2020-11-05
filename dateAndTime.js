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
let onehour = h + 1

if (h > 12){
    h -= 12;
    h += ' PM';
}

if (onehour > 12){
    onehour -= 12;
    onehour += ' PM';
}

switch (day){
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



console.log('Today is : ' + day + ' the ' + date + 'th.');
console.log('Current time is : ' + h + ' : ' + m + ' : ' + s);
console.log('1 hour from now is : ' + onehour + ' : ' + m + ' : ' + s);