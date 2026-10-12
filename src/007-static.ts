// static

class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }

  static decrement() {
    return (Counter.count -= 1);
  }
}

// const instance1 = new Counter(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >> 3

// const instance2 = new Counter(); // different memory
// console.log(instance2.increment()); // 1
// console.log(instance2.increment()); // 2

// const instance3 = new Counter(); // different memory
// console.log(instance3.increment()); // 1
// console.log(instance3.increment()); // 2

console.log(Counter.increment()); // jodi method o static declare kore feli
