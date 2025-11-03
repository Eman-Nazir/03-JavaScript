let score = 10;
const maxScore = 100;
score += 20;
// maxScore = 120; 
console.log("Score:", score);
console.log("Max Score:", maxScore);
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Eman"));
const city = "Lahore";
console.log(`Welcome ${greet("Eman")} from ${city}`);
const girls = ["Ayesha", "Fatima"];
const boys = ["Ali", "Ahmed"];
const allChildren = [...girls, ...boys];
console.log("All Children:", allChildren);
const nums = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log("Sum:", sum(...nums));
const logNumbers = (first, second, ...rest) => {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
};
logNumbers(1, 2, 3, 4, 5);
const user = {
  name: "Eman",
  age: 22,
  contact: {
    country: "Pakistan",
    city: {
      name: "Lahore",
      zip: 60000,
    },
  },
};
const {
  name,
  age,
  contact: {
    city: { zip },
  },
} = user;
console.log("User Info:", name, age, zip);
const { name: username, age: userAge } = user;
console.log("Aliased:", username, userAge);
const fruit = "apple";
const quantity = 5;
const order = {
  fruit,
  quantity,
  showOrder() {
    return `Ordered ${this.quantity} ${this.fruit}(s)`;
  },
};
console.log(order.showOrder());
const cityName = user.contact?.city?.name;
console.log("City Name:", cityName);
let userTheme = null;
console.log("Theme:", userTheme ?? "Default Theme");
let zero = 0;
console.log("Zero || 5:", zero || 5);   
console.log("Zero ?? 5:", zero ?? 5);   
const person = {
  name: "Yashfa",
  hobbies: ["Coding", "Drawing", "Gaming"],
  showHobbies() {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} loves ${hobby}`);
    });
  },
};
person.showHobbies();
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color:", color);
}
const uniqueNums = new Set([1, 2, 3, 1, 2]);
console.log("Unique Set:", uniqueNums);

const roles = new Map();
roles.set("Hina", "Developer");
roles.set("Ali", "Designer");
console.log("Role of Hina:", roles.get("Hina"));
console.log("Roles", roles);


const studentMarks = new Map();

studentMarks.set("Ayesha", 95);
studentMarks.set("Hina", 87);

console.log(studentMarks.get("Ayesha"));  
console.log(studentMarks.get("Hina"));    
console.log(studentMarks.get("Maria"));   
