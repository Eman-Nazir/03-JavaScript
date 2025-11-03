//  OBJECT
const student = {
  name: "Eman",
  rollNo: 15,
  course: "Web Development",
  showInfo() {
    console.log(`Name: ${this.name}, Roll: ${this.rollNo}, Course: ${this.course}`);
  }
};
student.showInfo();
const car = {
  brand: "Honda",
  model: "Civic",
  year: 2023,
  start() {
    console.log(`${this.brand} ${this.model} engine started`);
  },
  stop() {
    console.log(`${this.brand} ${this.model} engine stopped`);
  }
};
car.start();
car.stop();
const book = {
  title: "JavaScript Mastery",
  author: "John Doe",
  pages: 350,
  describe() {
    console.log(`${this.title} by ${this.author} has ${this.pages} pages.`);
  }
};
book.describe();
const product = {
  name: "Laptop",
  price: 85000,
  stock: 10,
  sell(quantity) {
    this.stock -= quantity;
    console.log(`Sold ${quantity} laptops. Remaining stock: ${this.stock}`);
  }
};
product.sell(2);
const movie = {
  name: "Inception",
  rating: 8.8,
  play() {
    console.log(`Now playing: ${this.name}  Rating: ${this.rating}`);
  }
};
movie.play();
//  CLASSES 
// Class  Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}
const p1 = new Person("Ali", 25);
p1.intro();
// ClassAnimal
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.type} says ${this.sound}`);
  }
}
const cat = new Animal("Cat", "Meow");
const dog = new Animal("Dog", "Woof");
cat.makeSound();
dog.makeSound();
// Class Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} speed: ${this.speed}`);
  }
  brake(amount) {
    this.speed -= amount;
    console.log(`${this.brand} ${this.model} slowed to: ${this.speed}`);
  }
}
const c1 = new Car("Toyota", "Corolla", 2022);
c1.accelerate(60);
c1.brake(20);
// Class  BankAccount
class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(`${this.owner} withdrew ${amount}. Remaining balance: ${this.balance}`);
  }
}
const acc = new BankAccount("Eman", 1000);
acc.deposit(500);
acc.withdraw(200);
// Class Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}
const rect = new Rectangle(10, 5);
console.log("Area:", rect.area());
console.log("Perimeter:", rect.perimeter());
// Class Student
class Student {
  constructor(name, roll, grades = []) {
    this.name = name;
    this.roll = roll;
    this.grades = grades;
  }
  addGrade(g) {
    this.grades.push(g);
  }
  average() {
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return (sum / this.grades.length).toFixed(2);
  }
}
const s1 = new Student("Ali", 21);
s1.addGrade(85);
s1.addGrade(90);
console.log(`${s1.name}'s Average:`, s1.average());
// Class Employee
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  yearlyBonus() {
    return this.salary * 0.1;
  }
}
const emp = new Employee("Sara", 60000);
console.log(`Bonus for ${emp.name}: ${emp.yearlyBonus()}`);
// Class  Temperature
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  toFahrenheit() {
    return (this.celsius * 9/5) + 32;
  }
}
const temp = new Temperature(30);
console.log("Fahrenheit:", temp.toFahrenheit());
// Class Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discount(percent) {
    const discounted = this.price - (this.price * percent / 100);
    console.log(`${this.name} after ${percent}% off: ${discounted}`);
  }
}
const p = new Product("Phone", 100000);
p.discount(15);
// Class  Circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }
  circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
const circle = new Circle(7);
console.log("Circle Area:", circle.area());
console.log("Circumference:", circle.circumference());