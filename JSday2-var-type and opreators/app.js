// keywords
// 1- var
// 2- let
// 3- const

var num = 100;
let num2 = 100;
const num3 = 100;
console.log(num, num2, num3);
console.log(typeof num, typeof num2, typeof num3);
// 1- declaration
// var aNumber;

// 2- assignment / initialization
// aNumber = 100;

// Differences
var age;
age = 20;
var age;
age = 30;
console.log("AGE =======", age);

let gender;
gender = "male";
gender = "female";
console.log("GENDER =======", gender);
const city = "Burewala";
// city = "Lahore";    // ERROR 
console.log("city =======", city);
// Operators
// 1- arithmetic operators (+, - , *, /) , % (modulus), **(exponent)
// 2- Assignment operator (=)

// Naming conventions
// 1 - no reserved words
// 2- cannot start with a number
// 3- cannot use hyphens

// Camel case


const numberOne = 10;
const numberTwo = 20;
console.log("SUM ==== ", numberOne + numberTwo);
console.log("DIFFERENCE ==== ", numberOne - numberTwo);
console.log("MUL ==== ", numberOne * numberTwo);
console.log("DIV ==== ", numberOne / numberTwo);
console.log("MOD ==== ", numberOne % numberTwo);
console.log("EXP ==== ", numberOne ** numberTwo);
// comparison operators
// 1- equal (==, ===)
// 2- greater than (>)
// 3- less than (<)
console.log(20 == 20);
console.log(20 == "20");
console.log(20 === "20");
console.log(22 > "21");
console.log(22 >= "21");
console.log(21 >= "21");
// logical operators // 1 - and
// 2- or
// 3- not (inverter)

console.log("LOGICALS ======== ", true && true);
console.log("LOGICALS ======== ", true && false);

console.log("LOGICALS ======== ", true || true);
console.log("LOGICALS ======== ", true || false);

console.log("LOGICALS ======== ", !!true);
// Conditional / Control statements

// if - else
const condition = "HEELO World";
if (condition) {
  console.log("True case");
} 
else {
  console.log("False case");
}

const condition1 = true;
if (condition1) {
  console.log("True case");
} 
else {
  console.log("False case");
}

const condition2 = false;

if (condition2) {
  console.log("True case");
} 
else {
  console.log("False case");
}
const Age = 35;
if (Age >= 35) {
  console.log("True case");
} 
else {
  console.log("False case");
}
const eligibleAge = 19;
if (eligibleAge >= 20) {
  console.log("You are eligible for a driving lisense");
} else {
  console.log("You are not eligible for a driving lisense");
}

console.log("Average of three numbers", (2 + 6 + 10) / 3);
