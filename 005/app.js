console.log('005 Much wow');
// Local storage

// let color = 'skyblue';
// localStorage.setItem('myFavoriteColor', color);
// // localStorage.removeItem('myFavoriteColor'); Galima istrinti

// console.log(localStorage.getItem('myFavoriteColor'));

const obj = {};

const arr = [];

const map = new Map();

class SayName {

    static voice = 'big one';

    constructor() {
        this.papers = 'Yes';
    }


    whatIsYourName() {
        return this.name
    }

    static whatIsYourVoice() {
        return this.voice //this -> klase
    }
    whatIsYourVoiceNotStatic() {
        return this.constructor.voice;
        return this.voice //this - objektas (objekte statinio dalyko nera). 
    }
}

class Cat extends SayName {

    static voice = 'small one'; //Overrides the static one.

    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = parseInt(Math.random() * 10 + 1);
    }
    whatIsYouName() {  //will override the function.
        return 'Miau';
    }
}

class Dog extends SayName {

    constructor(name, color) {
        super();
        this.name = name;
        this.age = parseInt(Math.random() * 15 + 1);
    }
}

const murka = new Cat('Murka', 'brown');
const pilkis = new Cat('Pilkis', 'gray')

const bobik = new Dog('Bobik')

console.log(SayName.voice);
console.log(Cat.voice);
console.log(Dog.voice);


console.log(murka.whatIsYourName());
console.log(pilkis.whatIsYourName());
console.log(bobik.whatIsYourName());

console.log(murka.whatIsYourVoice());
console.log(pilkis.whatIsYourVoice());
console.log(bobik.whatIsYourVoice());

console.log(murka.whatIsYourVoiceNotStatic());



// console.log(obj);
// console.log(arr);
// console.log(map);
console.log(murka);
console.log(pilkis);