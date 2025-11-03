const heading = () => "ES6 Basics: let, var, const, functions, arrays, and objects";
export default heading;

export function variableLogs() {
  console.log("===== VARIABLES: let, var, const =====");
  let a = 10;
  console.log("let a = 10 →", a);
  a = 15;
  console.log("Updated let a = 15 →", a);
  var b = 20;
  console.log("var b = 20 →", b);
  b = 25;
  console.log("Updated var b = 25 →", b);
  const c = 30;
  console.log("const c = 30 →", c);
  console.log("const can't be reassigned. Trying it will cause an error.");
  if (true) {
    var d = "var in block";
    let e = "let in block";
    console.log("Inside block → var d:", d);
    console.log("Inside block → let e:", e);
  }
  console.log("Outside block → var d:", d);
  try {
    console.log("Outside block → let e:", e);
  } catch (err) {
    console.log("let e is block scoped →", err.message);
  }
}
export function declaredFunction(name) {
  console.log("===== FUNCTION DECLARATION =====");
  console.log(`Hello ${name}, this is a traditional function declaration.`);
}
export const expressedFunction = function (num) {
  console.log("===== FUNCTION EXPRESSION =====");
  const result = num % 2 === 0 ? "Even" : "Odd";
  console.log(`The number ${num} is → ${result}`);
};
export const arrowFunction = (x) => {
  console.log("===== ARROW FUNCTION =====");
  console.log(`${x} squared is →`, x * x);
};
export const showArrayData = () => {
  console.log("===== ARRAY OPERATION =====");
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  console.log("Fruits:", fruits);
  console.log("First fruit:", fruits[0]);
  console.log("All in uppercase:");
  fruits.forEach((f, i) => console.log(`${i + 1}. ${f.toUpperCase()}`));
};
export const showStudentsTable = () => {
  console.log("===== OBJECT & console.table() =====");
  const students = [
    { name: "Ali", score: 85, passed: true },
    { name: "Zara", score: 58, passed: false },
    { name: "Bilal", score: 90, passed: true },
    { name: "Hira", score: 100, passed: true }
  ];
  console.log("Students List:");
  console.table(students);
  console.log("Students who passed:");
  console.table(students.filter(s => s.passed));
};
export const averageScore = (students) => {
  console.log("===== CALCULATE AVERAGE SCORE =====");
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }
  const avg = (total / students.length).toFixed(2);
  console.log("Total Students:", students.length);
  console.log("Average Score:", avg);
};