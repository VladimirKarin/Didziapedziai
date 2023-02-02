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

let biggerThanX = (array, num) => array.filter(n => n > num);

console.log(biggerThanX(arr, 10))

//Nr b
const resultMathMax = Math.max(...arr);
console.log(resultMathMax);

const resultIndexOf = arr.indexOf(Math.max(...arr));
console.log(resultIndexOf);

// Nr c

const filtered = arr.filter((_, i) => i % 2 === 0)
console.log(filtered)

let sum = 0;
arr.map((item) => sum += item);
console.log(sum);

//Nr d

// let sumItemPlusIndexOfItem = 0;
// arr.map((item) => sumItemPlusIndexOfItem += (item + arr.indexOf(item)));
// console.log(arr.indexOf(item));
// console.log(item);
// console.log(sumItemPlusIndexOfItem);
// function sumItem() {
//     let sumFunc = 0;
//     arr.forEach(item => {
//         sumFunc += item;
//         return sumFunc;

//     })

// }
// sumItem

// function sumIndex() {
//     let sumIndex = 0;
//     arr.forEach(item => {
//         sumIndex += arr.indexOf(item);
//         return sumIndex;
//         console.log(sumIndex);
//     })
// }

//e
