"use strict";
console.log('HELL-ou');

//set

const fancySet = new Set();

fancySet.add('racoon');
fancySet.add('fox');
fancySet.add('moose');
fancySet.add('wolf');

// fancySet.delete('fox');
fancySet.add({ animal: 'fox' });
fancySet.add({ animal: 'fox' });
fancySet.add({ animal: 'fox' });
fancySet.add({ animal: 'fox' });


console.log(fancySet.has('fox'));
console.log(fancySet.has('beaver'));


console.log(fancySet, fancySet.size);

const randomSet = new Set();

do {
    const genDigit = parseInt(Math.random() * 10 + 1);
    randomSet.add(genDigit);
} while (randomSet.size < 10);

console.log(randomSet);
console.log([...randomSet]);


const arr = [2, 5, 8, 1, 6, 7, 2, 2]

const arrSet = [... new Set(arr)];
console.log(arrSet);

console.log(new Set([...fancySet].sort()));

const fancyArr = [...fancySet].sort();

fancySet.clear();
fancyArr.forEach(e => fancySet.add(e));

console.log(fancySet);


// MAP
const fancyMap = new Map();
fancyMap.set('a1', 'Racoon');
fancyMap.set('a2', 'Fox')

console.log(fancyMap.get('a2'));

// fancyMap.set({a:2}, 'Racoon');
// fancyMap.set({ a: 2 }, 'Fox');
// fancyMap.set({ a: 2 }, 'Racoon');



console.log(fancyMap.has('a2'));
console.log(fancyMap.has('fox'));

fancyMap.forEach((a, i) => console.log(a, i));

const arrMap = [...fancyMap];

fancyMap.clear();

arrMap.sort((a, b) => a[1].localeCompare(b[1]));

arrMap.forEach(e => fancyMap.set(e[0], e[1]));



console.log(fancyMap);

console.log(arrMap);

fancyMap.clear();

console.log(fancyMap.has());


for (const o of fancyMap) {
    console.log(o);
}




