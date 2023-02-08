//Test Nr 1
// 1
console.log('---1---');

let dice1 = parseInt(Math.random() * 6 + 1);
let dice2 = parseInt(Math.random() * 6 + 1);
const sum = dice1 + dice2;
if (sum >= 8) {
    console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}. Total sum is ${sum}. You have won!`);
} else {
    console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}. Total sum is ${sum}. You have lost!`);
}

// 2
console.log('---2---');

const Tima = parseInt(Math.random() * 6 + 3);
const Sonya = parseInt(Math.random() * 6 + 3);
if (Tima < Sonya) {
    console.log(`Tima weights ${Tima} kg. Sonya weights ${Sonya} kg. Tima is lighter.`);
} else if (Tima > Sonya) {
    console.log(`Tima weights ${Tima} kg. Sonya weights ${Sonya} kg. Sonya is lighter.`);
} else {
    console.log(`Tima is ${Tima} and Sonya is ${Sonya}. Both are fat asses`);
}

// 3
console.log('---3---');

const catBoat = 15;
const cowBoat = 15;
const catNumber = parseInt(Math.random() * 30);
const cowNumber = parseInt(Math.random() * 30);

console.log(`There are ${catNumber} cats and ${catBoat} places in the boat. `);
console.log(`And there are ${cowNumber} cows and ${cowBoat} places in their boat.`);
console.log(`Will they survive ?`);
if (catBoat >= catNumber && cowBoat >= cowNumber) {
    console.log(`Fits perfectly.`);
} console.log(`Sorry, doesn't fit`);

// 4 
console.log('---4---');

const dice = parseInt(Math.random() * 6 + 1);

if (dice === 1 || dice === 5) {
    console.log(`Dice - ${dice} Buy a TV.`);
} else if (dice === 3 || dice === 4) {
    console.log(`Dice - ${dice} Buy a washing maching.`);
} else if (dice === 2 || dice === 6) {
    console.log(`Dice - ${dice} Buy a fridge`);
}


// 5 Boss Level
console.log('---5 Boss Level---');

const randomArray = [];

for (let i = 1; i <= 3; i++) {
    randomArray.push(parseInt(Math.random() * 7 + 1))
}
console.log(randomArray.sort());