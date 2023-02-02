// Good
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const numbers = generateArray(10, 10);
console.log(numbers);

// 1 Lygio variantas

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}
const arr1 = [];
for (let i = 0; i < 10; i++);
const rand = getRandomInt(1, 10);
arr1.push(rand);

console.log(arr1);

// 2 Lygio variantas
//Best
const arr2 = [...Array(10)].map(_ => parseInt(Math.random() * 10 + 1));
console.log(arr2);

let racoons = 5;

if (racoons) {
    console.log('Yes');
} else {
    console.log('No');
}
