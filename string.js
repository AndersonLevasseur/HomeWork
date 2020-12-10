let myString = 'my name is Anderson';
// console.log(myString.length);
// console.log(myString[8]);
// console.log(myString[0]);
// console.log(myString[myString.length - 1]);
// console.log(myString.indexOf('is'));

console.log(
    myString.slice(8, 
        myString.indexOf(' ', 8)
    )
);