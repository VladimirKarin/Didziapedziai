// Nr1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt(5, 25));

const arr = [];
for (let i = 0; i < 30; i++) {
    const randNum = getRandomInt(5, 25);
    arr.push(randNum);
}
console.log(arr);

// const arr2 = [...Array(30)].map(_ => parseInt(Math.random(5, 25) * 10 + 1));
// console.log(arr2);

//Nr a

// const arr2 = arr.filter(moreThanX);
// function moreThanX(num) {
//     return arr > 10;
// }
// console.log(arr2);
console.log('---A---');

let biggerThanX = (array, num) => array.filter(n => n > num);

console.log(biggerThanX(arr, 10))

//Nr b
console.log('---B---');

const resultMathMax = Math.max(...arr);
console.log(resultMathMax);

const resultIndexOf = arr.indexOf(Math.max(...arr));
console.log(resultIndexOf);

// Nr c
console.log('---C---');

const filtered = arr.filter((_, i) => i % 2 === 0)
console.log(filtered)

let sum = 0;
arr.map((item) => sum += item);
console.log(sum);

//Nr d
console.log('---D---');
const arrayD = [...arr];

let arrD = [];
for (let i = 0; i <= arrayD.length; i++) {

    arrD.push(arrayD[i] - i);
}
console.log(arrD);

//Nr e
console.log('---E---');

const arrNew = [...arr];
for (let i = 1; i < 10; i++) {
    const randNum = getRandomInt(5, 25);
    arrNew.push(randNum);
}
console.log(arrNew);

//Nr f
console.log('---F---');

let evenArr = [];
let oddArr = [];

for (let i = 0; i <= arrNew.length; i + 2) {
    evenArr.push(arrNew[i]);
}

for (let i = 1; i <= arrNew.length; i + 2) {
    oddArr.push(arrNew[i]);
}

console.log(evenArr);
console.log(oddArr);

