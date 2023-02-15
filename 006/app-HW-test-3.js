//Tarpinis žinių patikrinimas #3

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];

const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// Nr1 Add a new value in the beggining of the array.
console.log('');
console.log('----- Nr. 1 -----');
console.log('');

bitGirls.unshift('Nauseda');
console.log(bitGirls);


console.log();
console.log('----- Nr. 2 -----');
console.log();

let catNames = [];
let catShape = [];
const bitCats = [catNames, catShape];



function catsNamesAndShapesSeparator(c) {

    catNames.push(c);
    let random = rand(0, 1);
    catShape.push(random === 0 ? 'skinny' : 'fat');
    console.log(catNames, catShape);
}

cats.forEach(c => catsNamesAndShapesSeparator(c));
console.log(bitCats);


console.log();
console.log('----- Nr. 3 -----');
console.log();

const skinnyCat = [];
const fatCat = [];
const fat = 'fat';

skinnyCat = bitCats.filter(value => value = fat);
console.log(skinnyCat);


