console.log('Ahoy!');

// Logical operators 

// &&- add
// || - or

const A = 5;
const B = 7;

console.log('A && B', A && B);  //7
console.log('B && A', B || A);  //5

/*
T && T => T
T && F => F

ShortCut
F && T => F
F && F => F
*/

const a = 10;
const b = 20;

console.log('A || B', A || B);  //10
console.log('B || A', B || A);  //20

/*
F || T => T
F || F => F

ShortCut
T || T => T
T || F => T
*/


//To String
const D = 5;

const SD = '' + D;

console.log(typeof D, '=>', typeof SD);


//To Number
const S = '88';

const DS = +D;

console.log(typeof S, '=>', typeof DS);


//To Boolean
const Z = 0;
const Y = 'Wow'
const L1 = !!Z;
const L2 = !!Z;

console.log(typeof L1, L2);

console.log('-----------------');

//FUNCTIONS
// --- Func Declaration

const sayHello = function () {
    console.log("You're Awesome!");

    return 'Some text, so the fucntion could return it'
}

const fun = function () {
    console.log('ONE');
    return function () {
        console.log('TWO');
        return function () {
            console.log('THREE');
        }
    }
}

// --- Func Call
sayHello();

const vaRun = sayHello();  // = return
const vaNotRun = sayHello; // - changing name of function

const makeFun = fun;
makeFun()()();


// Anonimine Funkcija
const Hi_1 = function () {
    return 'Some text, so the fucntion could return it';
}
const Hi_2 = () => {
    return 'Some text, so the fucntion could return it';
}

const Hi_3 = () => 'Some text, so the fucntion could return it';


//Jeigu funkcija turi 1 parametra, galima rasyti be skliaustu '()'. Jeigu jose nieko nera irasyta.
const Hi_4 = _ => 'Some text, so the fucntion could return it';

// parametrai
// const funFun = (a, b, c) => {
//     console.log(a * b);
// }
const _15 = 15;
//argumentai (pirmas i pirma, antras i antra)
// funFun(8, _15);

//callback funkcija

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

const addStars = word => console.log('* ' + word + ' *');
const addPlus = word => console.log('+ ' + word + ' +');


const iterator = (what, fun) => {
    for (let i = 0; i < what.length; i++) {
        fun(what[i]);
    }
};

// iterator(animals, addPlus);
// iterator(colors, addStars);

// animals.forEach(addStars);
// colors.forEach(addPlus);
colors.forEach(word => console.log('+ ' + word + ' +'));

colors.forEach((word, index) => console.log(word, index));


// animals[15] = 'bird';
animals.push('bird'); // Prideda i masyvo gala.

animals.unshift('mouse', 'fox', 'wolf', 'rabbit'); // Prideda i pradzia, stumdzia visus elementus per viena ir preki.

animals.pop(); // nuima paskutini masyvo elementa

animals.shift(); // isima is pradzios elementa

animals.unshift(colors); // Visas masyvas i pirma vieta (indexa)
animals.unshift(...colors); // Spreadas ima struktura is vieno tipo konteinerio ir perdeda i kita funkcija, arba konteineri
console.log({ ...colors });



