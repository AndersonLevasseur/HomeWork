// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Mix” instead of the number and for the multiples of five print “Up”. 
// For numbers which are multiples of both three and five print “MixUp”.
let answer = '';
for (let i=1; i<101; ++i){
    answer = '';
    if (i % 3 == 0){
        answer = 'Mix';
    }
    if (i % 5 == 0){
        answer += 'Up';
    }
    if (i % 3 != 0 && i % 5 != 0){
        answer = i;
    }
    console.log(answer);
}
