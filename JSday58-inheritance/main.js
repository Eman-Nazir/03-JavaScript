// =======================================
// 5 OOP INHERITANCE EXAMPLES

// Example 1: Admin inherits User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  deleteUser(userName) {
    console.log(`${userName} was deleted by admin ${this.name}`);
  }
}

const admin1 = new Admin("Eman", "eman@gmail.com", "Super Admin");
admin1.login();
admin1.deleteUser("Ali");
admin1.logout();

// Example 2: Moderator inherits User
class Moderator extends User {
  constructor(name, email, section) {
    super(name, email);
    this.section = section;
  }

  suspendUser(userName) {
    console.log(`${userName} suspended by moderator ${this.name}`);
  }
}

const mod1 = new Moderator("Sara", "sara@gmail.com", "Tech");
mod1.login();
mod1.suspendUser("Ahmed");
mod1.logout();


// Example 3: Guest inherits User
class Guest extends User {
  constructor(name, email, expiryDate) {
    super(name, email);
    this.expiryDate = expiryDate;
  }

  showExpiry() {
    console.log(`${this.name}'s access expires on ${this.expiryDate}`);
  }
}

const guest1 = new Guest("Bilal", "bilal@gmail.com", "2026-12-31");
guest1.login();
guest1.showExpiry();
guest1.logout();


// Example 4: PremiumUser inherits User
class PremiumUser extends User {
  constructor(name, email, subscriptionPlan) {
    super(name, email);
    this.subscriptionPlan = subscriptionPlan;
  }

  showPlan() {
    console.log(`${this.name} has a ${this.subscriptionPlan} subscription`);
  }
}

const premium1 = new PremiumUser("Aisha", "aisha@gmail.com", "Gold");
premium1.login();
premium1.showPlan();
premium1.logout();


// Example 5: Employee inherits User
class Employee extends User {
  constructor(name, email, position, salary) {
    super(name, email);
    this.position = position;
    this.salary = salary;
  }

  showDetails() {
    console.log(`${this.name} works as ${this.position} with salary $${this.salary}`);
  }
}

const emp1 = new Employee("Hassan", "hassan@gmail.com", "Developer", 5000);
emp1.login();
emp1.showDetails();
emp1.logout();

