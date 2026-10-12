// oop - class >>> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`The ${this.name} is making sound: ${this.sound}`);
//   }
// }

// parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`The ${this.name} is making sound: ${this.sound}`);
  }
}

const dog = new Animal("dogesh bhai", "mammals", "ghew");
// console.log(dog.name);

const cat = new Animal("cat bhai", "mammals", "meaw");
// console.log(cat.name);
cat.makeSound();
