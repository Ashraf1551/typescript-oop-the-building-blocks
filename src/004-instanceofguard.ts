// oop: instance of guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numberOFhours: number) {
    console.log(`${this.name} sleeps ${numberOFhours} hours daily`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOFhours: number) {
    console.log(`${this.name} studies ${numberOFhours} hours daily`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numberOFhours: number) {
    console.log(`${this.name} takes class ${numberOFhours} hours daily`);
  }
}

// const getuserInfo = (user: Person) => {
//   if (user instanceof Student) {
//     user.doStudy(10);
//   } else if (user instanceof Teacher) {
//     user.takeClass(4);
//   } else {
//     user.getSleep(15);
//   }
// };
// OR

// function guard: instance of
const isStudent = (user: Person) => {
  return user instanceof Student; // true, user is Student
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher; // true, user is Teacher
};

const getuserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(4);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. Students");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Mr Person");

getuserInfo(person1);
