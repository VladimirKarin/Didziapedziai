class Kibiras1 {
    constructor(name, amount) {
        this.name = name;
        this.akmenuKiekis = amount;
    }
    prideti1Akmeni() {
        return kibiras.akmenuKiekisakmenuKiekis + 1;
    }

    pridetiDaugAkmenu(n) {
        this.akmenuKiekis + n;
    }

    kiekPririnktaAkmenu() {
        console.log('Pririnkta: ', this.akmenuKiekis, 'akmenu');
    }

}

const kibiras = new Kibiras1('Kibiras', 0);
console.log(kibiras);

kibiras.prideti1Akmeni();
console.log(kibiras.prideti1Akmeni);