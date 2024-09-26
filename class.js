// has some properties

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  country = "Bangladesh";
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("Lenovo", 55000);
// console.log(lenovo);
// lenovo.speak("Have you eaten?");
// console.log(lenovo.price);

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching math");
  }
}

const tapan = new Teacher("Tapon sir", "Physics");

console.log(tapan);

const rashid = new Teacher("Rashid sir", "English");
console.log(rashid);
