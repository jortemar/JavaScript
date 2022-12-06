class Character {
    #name;
    #type = "Player";
    #lifes = 3;
    #energy = 5;

    constructor(name) {
        this.#name = name;
        console.log(`¡Bienvenido/a, ${this.#name}!`);
    }

    get aboutName() {
        return this.#name;
    }
    set aboutName(name) {
        this.#name = name;
    }

    get aboutType() {
        return this.#type;
    }
    set aboutType(type) {
        this.#type = type;
    }

    get aboutLifes() {
        return this.#lifes;
    }
    set aboutLifes(lifes) {
        this.#lifes = lifes;
    }

    get aboutEnergy() {
        return '⭐'.repeat(this.#energy);
    }
    set aboutEnergy(energy) {
        this.#energy = energy;
    }

    toString() {
        return this.#name + "\n" +
                "Lifes: " + this.#lifes + "\n" + 
                "Energy: " + '⭐'.repeat(this.#energy);
    }

    hablar() {
        console.log("¡It's me, Mario!");
    }

    comeSetaVerde() {
        this.#lifes++;
    }

    muere() {
        this.#lifes--;
    }

    comeEstrella() {
        this.#energy *= 2;
    }

    finEstrella() {
        this.#energy /= 2;
    }
}

const mario = new Character("Mario");
const luigi = new Character("Luigi");

mario.hablar();

alert(mario);
mario.comeSetaVerde();
alert(mario);
mario.comeEstrella();
alert(mario);
mario.comeEstrella();
alert(mario);
mario.muere();
alert(mario);
mario.finEstrella();
alert(mario);
mario.muere();
alert(mario);