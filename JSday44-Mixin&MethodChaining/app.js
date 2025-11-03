//  MIXINS SECTION
//  Example 1 
const LoggerMixin = {
  log(message) {
    console.log(`[LOG]: ${message}`);
  },
};
class Person {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Person.prototype, LoggerMixin);
const p1 = new Person("Eman");
p1.log("Person object created!");

//  Example 2 
const TimestampMixin = {
  showTime() {
    console.log( new Date().toLocaleString());
  },
};
class Task {
  constructor(title) {
    this.title = title;
  }
}
Object.assign(Task.prototype, TimestampMixin);
const t1 = new Task("Finish Project");
t1.showTime();
//  Example 3 
const ResetMixin = {
  reset() {
    for (let key in this) {
      if (typeof this[key] !== "function") this[key] = null;
    }
    console.log("All data reset!");
  },
};
class Profile {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
Object.assign(Profile.prototype, ResetMixin);
const p = new Profile("Yashfa", "yashfa@email.com");
p.reset();
//  Example 4 
const SaveMixin = {
  save() {
    console.log(`Saving data for ${this.constructor.name}`);
  },
};
class Document {
  constructor(title) {
    this.title = title;
  }
}
Object.assign(Document.prototype, SaveMixin);
const doc = new Document("My Notes");
doc.save();
//  Example 5 
const AccessControlMixin = {
  hasAccess(role) {
    return role === "admin";
  },
};
class Dashboard {}
Object.assign(Dashboard.prototype, AccessControlMixin);
const d1 = new Dashboard();
console.log("Access allowed:", d1.hasAccess("admin"));
// Example 6 
const SpeakMixin = { speak() { console.log("Hello!"); } };
const WalkMixin = { walk() { console.log("Walking..."); } };
class Robot {}
Object.assign(Robot.prototype, SpeakMixin, WalkMixin);
const r1 = new Robot();
r1.speak();
r1.walk();
//  Example 7 
const MathMixin = {
  square(n) { return n * n; },
  cube(n) { return n * n * n; },
};
class Calculator {}
Object.assign(Calculator.prototype, MathMixin);
const calc = new Calculator();
console.log("Square:", calc.square(3), "Cube:", calc.cube(2));
//  Example 8 
const FlyMixin = {
  fly() { console.log(`${this.name} is flying!`); },
};
class Bird { constructor(name) { this.name = name; } }
class Plane { constructor(name) { this.name = name; } }
Object.assign(Bird.prototype, FlyMixin);
Object.assign(Plane.prototype, FlyMixin);
new Bird("Eagle").fly();
new Plane("Jet").fly();
// Example  9
const ValidationMixin = {
    validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
};
class Customer {
    constructor(email) {
        this.email = email;
    }
}
Object.assign(Customer.prototype, ValidationMixin);
const c1 = new Customer("test@email.com");
console.log("Valid Email:", c1.validateEmail(c1.email));
//  METHOD CHAINING SECTION
//  Example 1 
class CalcChain {
  constructor(value = 0) { this.value = value; }
  add(n) { this.value += n; return this; }
  multiply(n) { this.value *= n; return this; }
  show() { console.log("Result:", this.value); return this; }
}
new CalcChain(5).add(5).multiply(2).show();
//  Example 2 
class StringBuilder {
  constructor(base = "") { this.str = base; }
  append(text) { this.str += text; return this; }
  toUpper() { this.str = this.str.toUpperCase(); return this; }
  print() { console.log(this.str); return this; }
}
new StringBuilder("hello").append(" world").toUpper().print();
//  Example 3 
class Product {
  setName(name) { this.name = name; return this; }
  setPrice(price) { this.price = price; return this; }
  setCategory(cat) { this.category = cat; return this; }
  show() { console.log(this); return this; }
}
new Product().setName("Laptop").setPrice(1200).setCategory("Electronics").show();
//  Example 4
class Animation {
  fadeIn() { console.log("Fading In..."); return this; }
  move() { console.log("Moving..."); return this; }
  fadeOut() { console.log("Fading Out..."); return this; }
}
new Animation().fadeIn().move().fadeOut();
//  Example 5
class Query {
  select(cols) { this.cols = cols; return this; }
  from(table) { this.table = table; return this; }
  where(cond) { this.cond = cond; return this; }
  execute() {
    console.log(`SELECT ${this.cols} FROM ${this.table} WHERE ${this.cond}`);
    return this;
  }
}
new Query().select("*").from("users").where("age > 18").execute();
//  Example 6 
class Element {
  constructor(tag) { this.tag = tag; this.styles = {}; }
  setColor(color) { this.styles.color = color; return this; }
  setFont(size) { this.styles.fontSize = size; return this; }
  show() { console.log(`Styled ${this.tag}:`, this.styles); return this; }
}
new Element("p").setColor("blue").setFont("18px").show();
//  Example 7
class Account {
  constructor(balance = 0) { this.balance = balance; }
  deposit(amount) { this.balance += amount; return this; }
  withdraw(amount) { this.balance -= amount; return this; }
  show() { console.log(`Balance: ${this.balance}`); return this; }
}
new Account(100).deposit(50).withdraw(20).show();
//  Example 8
class Logger {
  info(msg) { console.log(`${msg}`); return this; }
  warn(msg) { console.log(`${msg}`); return this; }
  error(msg) { console.log(`${msg}`); return this; }
}
new Logger().info("Starting app").warn("Low memory").error("App crashed");