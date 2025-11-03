// MathUtils class
console.log("===== Static Method ====");

class MathUtils {
  static PI = 3.14159;
}
console.log(MathUtils.PI);
// NetNut class with static methods
class NetNut {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius * radius;
  }
}
console.log(NetNut.PI);
console.log(NetNut.getDiameter(10));
console.log(NetNut.getCircumference(10));
console.log(NetNut.getArea(10));
// 1
class User1 {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User1.userCount++;
  }
}
var user1 = new User1("Hina");
console.log(user1.username);
console.log(user1.userCount);
// 2
class User2 {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User2.userCount++;
  }
}
var user2 = new User2("Hina");
console.log(user2.username);
console.log(User2.userCount);

// User class with multiple instances
class User3 {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User3.userCount++;
  }
}
var user1 = new User3("Hina");
var user2 = new User3("Laiba");
var user3 = new User3("Aiza");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User3.userCount);
class User4 {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User4.userCount++;
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}
// Creating users
var user1 = new User4("Hina");
var user2 = new User4("Laiba");
var user3 = new User4("Aiza");
user1.sayHello();
user2.sayHello();
user3.sayHello();
class User5 {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User5.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User5.userCount} users online`);
  }
  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}
// Creating users
var user1 = new User5("Hina");
var user2 = new User5("Laiba");
var user3 = new User5("Aiza");
user1.sayHello();
user2.sayHello();
user3.sayHello();
User5.getUserCount();

// ENCAPSULATION
console.log("===== ENCAPSULATION ====");

console.log("===== Example 1 =====");

class Account {
  #owner;
  #balance;
  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }
  getOwner() {
    return this.#owner;
  }
  setOwner(newOwner) {
    if (typeof newOwner === "string" && newOwner.length >= 3) {
      this.#owner = newOwner;
    } else {
      console.log("Invalid owner name.");
    }
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(amount) {
    if (typeof amount === "number" && amount >= 0) {
      this.#balance = amount;
    } else {
      console.log("Invalid balance.");
    }
  }
  display() {
    console.log(`Owner: ${this.#owner}, Balance: $${this.#balance}`);
  }
  static info() {
    console.log("Account class with encapsulation.");
  }
}
Account.info();
const acc1 = new Account("Musa", 1000);
acc1.display();
acc1.setOwner("Anas");
acc1.setBalance(1500);
acc1.display();

console.log("===== Example 2 =====");

class Product {
  #name;
  #price;

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }
  setName(name) {
    if (name.length >= 2) this.#name = name;
    else console.log("Name too short.");
  }
  getPrice() {
    return this.#price;
  }
  setPrice(price) {
    if (price > 0) this.#price = price;
    else console.log("Price must be positive.");
  }
  showInfo() {
    console.log(`Product: ${this.#name}, Price: $${this.#price}`);
  }
  static info() {
    console.log("Product class with encapsulation example.");
  }
}
Product.info();
const p1 = new Product("Laptop", 1200);
p1.showInfo();
p1.setPrice(1500);
p1.showInfo();
console.log("===== Example 3 =====");
class BankCustomer {
  #name;
  #accountNumber;
  constructor(name, accountNumber) {
    this.#name = name;
    this.#accountNumber = accountNumber;
  }
  getName() {
    return this.#name;
  }
  setName(name) {
    if (name.length >= 3) this.#name = name;
    else console.log("Invalid name.");
  }
  getAccountNumber() {
    return this.#accountNumber;
  }
  setAccountNumber(accNum) {
    if (/^\d{6}$/.test(accNum)) this.#accountNumber = accNum;
    else console.log("Account number must be 6 digits.");
  }
  display() {
    console.log(`Customer: ${this.#name}, Account No: ${this.#accountNumber}`);
  }
}
const c1 = new BankCustomer("Musa", "123456");
c1.display();
c1.setName("Ah");
c1.setAccountNumber("12345");
c1.setName("Ibrahim");
c1.setAccountNumber("654321");
c1.display();
console.log("===== Example 4 =====");
class LibraryBook {
  #title;
  #author;
  static bookCount = 0;
  constructor(title, author) {
    this.#title = title;
    this.#author = author;
    LibraryBook.bookCount++;
  }
  getTitle() {
    return this.#title;
  }
  setTitle(title) {
    if (title.length > 0) this.#title = title;
    else console.log("Title cannot be empty.");
  }
  getAuthor() {
    return this.#author;
  }
  setAuthor(author) {
    if (author.length > 0) this.#author = author;
    else console.log("Author cannot be empty.");
  }
  showBook() {
    console.log(`Book: "${this.#title}" by ${this.#author}`);
  }

  static totalBooks() {
    console.log(`Total books in library: ${LibraryBook.bookCount}`);
  }
}
const b1 = new LibraryBook("1984", "George Orwell");
const b2 = new LibraryBook("Brave New World", "Aldous Huxley");
b1.showBook();
b2.showBook();
LibraryBook.totalBooks();
b1.setTitle("");
b1.setTitle("Animal Farm");
b1.showBook();
