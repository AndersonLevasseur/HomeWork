// let catName = 'Pickett';
// let catFurColor = 'White';
// let catWeight = 21;

// let cat = {
//     name: catName,
//     color: catFurColor,
//     weight: catWeight,
//     meow: function () {
//         return 'mrow';
//     },
//     jump: function () {
//         this.color = 'brown';
//         this.weight -= .5;
//     },
//     workout: function (workoutTime) {
//         this.weight -= workoutTime;
//     },
//     eat: function (mealCount) {
//         this.weight = this.weight + mealCount;
//     }
// };
for (let i = 0; i < 5; ++i) {
    console.log(i);
    if (i % 3 == 1) {
         console.log('woof');
     } else if (i % 2 == 1) {
         console.log('cat meow');
     } else if (true) { 
         console.log('hi');
     } 
    switch (i) {
        case 1:
        case 2:
            console.log('one');
            console.log('two');
            break;
        case 3:
            console.log('three');
            break;
        case 4:
            console.log('four');
            break;
        default:
            console.log('default');
            break;

    }
}
//console.log(cat.meow());

// console.log(cat.weight);
// cat.eat(8);
// console.log(cat.weight);
// cat.workout(8);
// console.log(cat.weight);
// console.log(cat.color);
// cat.jump();
// console.log(cat.color);

let i = 0;
while (i < 5) {
    console.log(++i);
}
do {
    console.log(i++);
}
while (i < 3);