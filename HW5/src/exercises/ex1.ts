class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound(): void {
    console.log("The animal makes the sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }
  override sound(): void {
    console.log("The dog barks");
  }
}

const animal1 = new Animal("Зефир", "ленивая кисочка");
animal1.sound();

const dog1 = new Dog("Барсик", "уличный хозяин", "Овчарка");
dog1.sound();
