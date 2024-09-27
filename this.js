class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`sleeping now ${this.name}`);
  }

  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom Ali", 21);
console.log(kodom);
kodom.sleep();
const badam = new Person("Kacha Badam", 23);
badam.sleep();
badam.activity();

const lazy = kodom.sleep;
lazy();
