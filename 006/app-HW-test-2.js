function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Nr. 1 (for 10 - 1)
console.log('--- 1 ---');
console.log('');


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//Nr. 2 (for 10 - 1, + random + average)
console.log('');
console.log('--- 2 ---');
console.log('');

let speed = 0;

for (let i = 10; i >= 1; i--) {
    speed += rand(120, 220);
    console.log(`Lap Nr. ${i} - Speed is: ${speed}.`);
}

const averageSpeed = speed / 10;
console.log('');
console.log(` The average speed is- ${averageSpeed}`);


//Nr. 3 (for 10 - 1, + random + break + if)
console.log('');
console.log('--- 3 ---');
console.log('');

let fuelTank = 44;
let consumption = rand(3, 6);

for (let i = 10; i >= 1; i--) {

    fuelTank -= consumption;
    console.log(`Lap Nr. ${i} - Fuel left: ${fuelTank}.`);

    if (fuelTank <= 0) {
        console.log(`There are no fuel: ${fuelTank}`);
        break
    } continue

}
if (fuelTank >= 0) {
    console.log(`Fuel left ${fuelTank}. You have succeded!`);
} else {
    console.log(`You've didn't make it`);
}

//Nr. 4 (for 10 - 1, with another for inside 5-1, with .push and Math.min)
console.log('');
console.log('--- 4 ---');
console.log('');


let speed4 = rand(20, 120);
let speedOnTurn = [];

for (let i = 10; i >= 1; i--) {

    for (let j = 1; j <= 5; j++) {
        speedOnTurn.push(rand(20, 120))
    }
    console.log(`Lap: ${i}. The speed is: ${speedOnTurn}`);
}
console.log(`The slowest speed on turn was: ${Math.min(...speedOnTurn)} km/h`);


//Nr. 5 BOSS LEVEL (for 10 - 1, with another for inside 5-1, with .push and Math.min)

console.log('');
console.log('--- 5 BOSS LEVEL ---');
console.log('');


let distance = 0;
let cangarooAccident = rand(0, 1);
let wheelAccident = rand(0, 1);
let breaksAccident = rand(0, 1);

do {
    cangarooAccident
    console.log(`Did a wild cangaroo just appeared? 0 - Yes, 1 - No. : ${cangarooAccident}`);

    if (cangarooAccident === 1) {

        wheelAccident
        console.log(` Cangaroo on the road! Did the driver managed to turn the steering wheel? 0 - Yes, 1 - No, : ${wheelAccident}`);

        if (wheelAccident === 1) {
            break
        }

        breaksAccident
        console.log(`Did the driver managed to pull the breaks? 0 - Yes, 1 - No. : ${breaksAccident}`);

        if (breaksAccident === 1) {
            break
        }
    }

    distance += 1;
    console.log(`You have driven loop ${distance} km`);
}


while (cangarooAccident === 0) {
}

console.log(`You have driven total ${distance} km`);

