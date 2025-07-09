"use strict";
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    sound() {
        console.log("The animal makes the sound");
    }
}
class Dog extends Animal {
    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }
    sound() {
        console.log("The dog barks");
    }
}
const animal1 = new Animal("Зефир", "ленивая кисочка");
animal1.sound();
const dog1 = new Dog("Барсик", "уличный хозяин", "Овчарка");
dog1.sound();
