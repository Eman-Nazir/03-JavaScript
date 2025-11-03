const person = {
  name: "Eman",
  age: 19,
};
Object.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};
person.sayHello();
console.log(Object.getPrototypeOf(person));
function Student(name, age) {
  this.name = name;
  this.age = age;
}
Student.prototype.greet = function () {
  console.log(`Hi! I'm ${this.name}, and I'm ${this.age} years old.`);
};
Student.prototype.study = function (subject) {
  console.log(`${this.name} is studying ${subject}.`);
};
const student1 = new Student("Hiba", 21);
const student2 = new Student("Sara", 23);
student1.greet();
student2.greet();
student1.study("JavaScript");
student2.study("HTML");
console.log(Object.getPrototypeOf(student1));
console.log(student1.__proto__ === Student.prototype);
console.log(Student.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};
function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log(`${this.name} is teaching ${this.subject}`);
};
const teacher1 = new Teacher("Mr. Ahmed", "Math");
teacher1.sayName();
teacher1.teach();
Student.prototype.getAge = function () {
  console.log(`${this.name} is ${this.age} years old.`);
};
student1.getAge();
student2.getAge();
student1.greet = function () {
  console.log("Hello from the student1 object");
};
student1.greet();
delete student1.greet;
student1.greet();


const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);

Array.prototype.first = function () {
  return this[0];
};

console.log(arr.first());