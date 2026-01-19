// 1️ POLYMORPHISM

// Parent Class: Vehicle
class Vehicle {
  start() {
    return "Vehicle is starting";
  }
}

// Child Class: Car
class Car extends Vehicle {
  // Overriding start() method
  start() {
    return "Car engine starts with a key";
  }
}

// Child Class: Bike
class Bike extends Vehicle {
  // Overriding start() method
  start() {
    return "Bike engine starts with a self-start";
  }
}

// Creating instances
const car = new Car();
const bike = new Bike();
const genericVehicle = new Vehicle();

// Console outputs to demonstrate polymorphism
console.log("----- POLYMORPHISM EXAMPLE -----");
console.log("Generic Vehicle:", genericVehicle.start()); 
console.log("Car:", car.start());                        
console.log("Bike:", bike.start());                      

// 2️ GETTERS & SETTERS

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; 
  }

  // Getter to read age
  get age() {
    return this._age;
  }

  // Setter to update age safely
  set age(value) {
    if (value < 0) {
      console.log(`Invalid age (${value})! Age cannot be negative.`);
    } else {
      this._age = value;
      console.log(`Age successfully updated to ${value}`);
    }
  }

  // Method to introduce person
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this._age} years old.`;
  }
}

const person1 = new Person("Eman", 22);

console.log("----- GETTERS & SETTERS EXAMPLE -----");
console.log("Initial age (getter):", person1.age);

// Using setter to update age correctly
person1.age = 25;

// Using setter to update age incorrectly
person1.age = -5;

// Using method to introduce person
console.log(person1.introduce());

console.log("Final age (getter):", person1.age);
console.log("Explanation: Getters allow controlled reading of private properties, and Setters allow validation and safe updates.\n");
