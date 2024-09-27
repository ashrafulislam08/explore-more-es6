const person = {
  name: "Kodom ALi",
  job: "badam khai",
  3: "third",
  "address-line": "kochu khet",
};

const prop = "job";

console.log(person.job);
console.log(person["job"]);
console.log(person[prop]);
console.log(person["3"]);
console.log(person["address-line"]);

const cube = (x) => x * x * x;
console.log(cube(2));
