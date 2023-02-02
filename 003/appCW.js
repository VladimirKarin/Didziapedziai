const A = [
    'a',
    'b',
    'c'
];

//1 Tas pats masyvas, tik i ji kreipiames 2-m vardais. (reference type)

// const B = A;

// B.push('d');

//2 Tikra kopija- SPREAD
const B = [...A];

B.push('d');


//Prototype.
const addStars = word => console.log('* ' + word + ' *');

Array.prototype.go = function (fun) {

    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }

}

const animals = [
    'racoon',
    'beaver',
    'moose',
    'fox'
];



B.go(addStars);
B.forEach(addStars);

// forEach - ne turi metodo ir rezultato. Baigiasi be rezultato.
B.forEach(l => console.log(l));

const fr = B.forEach(l => console.log(l));


//map - grazina nauja masivo kipija. 
B.map(l => console.log(l));

const mr = B.map(l => l + '--->');

console.log(fr);
console.log(mr);


//filter
const filtered = B.filter(l => true);
const filtered2 = B.filter(l => false);
const filtered3 = animals.filter(l => l.length > 4);
const filtered4 = animals.filter(l => l != 'beaver').map(l => l + ' *');



//Sort (Pavojingiausias) dirba su originalu ir keicia ji.
const state = [
    'racoon',
    'beaver',
    'moose',
    'fox'
];

const an = [...state];

// negalima redaguoti STATE. KEICIASI ORIGINALAS.
// state.push('wolf');
// state.sort(); //(A-Z)

console.log([...state, 'wold'].sort());
// Z-A
an.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});

an.sort((a, b) => a.localeCompare(b)); // A-Z
an.sort((a, b) => b.localeCompare(a)); // Z-A

console.log(an);

const dig = [88, 34, 10, 158, 1];

dig.sort((a, b) => a - b); //0-9
dig.sort((a, b) => b - a); //9-0



//REACT PROGRAMMER

const out = animals.map(a => '<i style="color: crimson; display="block";>' + a + '</i>')

//REACT INSIDE
let html = '';
out.forEach(a => html += a);

document.querySelector('h1').innerHTML = html;

//Object

const man1 = {};

man.name = 'John';
man.surename = 'Smith';

const man2 = { ...man };
man2.name = "Arron";

const man3 = {
    name: 'Petras',
    surename: 'Lioliovas'
}

const name = 'Lina';
const surename = 'Lioliove';

// const man4 = {
//     name: name,
//     surename: surename
// }

const man4 = {
    name,
    surename
}

const prop = 'surename';

const man5 = {}
man5.name = 'Bronius';
man5[prop] = 'Kisas';


const house = [man1, man2, man3, man4, man5];

//rusiavimas objektu pagal pavarde
house.sort((a, b) => {
    if (a.surename > b.surename) return 1
    if (a.surename < b.surename) return -1
    return 0;
})

//rusiavimas pagal vardus
house.sort((a, b) => {
    //pavardes vienodos
    if (a.surename > b.surename) return 1
    if (a.surename < b.surename) return -1
    //vardai vienodi
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
})