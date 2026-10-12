class Person {
  name: string; //common
  age: number; //common
  address: string; //common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //common
  getSleep(numberOFhours: number) {
    console.log(`${this.name} ${numberOFhours} ghonta ghumai`);
  }
}

class Student extends Person {}

const student1 = new Student("Mr. Fakibaaz", 18, "Dhaka");

student1.name;

class Teacher extends Person {
  designation: string; //own

  constructor(name: string, age: number, address: string, designaion: string) {
    super(name, age, address);
    this.designation = designaion;
  }

  //own
  takeClass(numberOFhours: number) {
    console.log(`${this.name} ${numberOFhours} ghonta class nei`);
  }
}

const teacher1 = new Teacher("Mr. Smart", 45, "Dhaka", "Professor");

teacher1.name;
