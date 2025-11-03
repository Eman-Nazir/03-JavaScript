
// // Timers
// // setTimeout
// // setInterval
// const timeoutId = window.setTimeout(function () {
//   console.log("Timeout...");
// }, 5000);

// const intervalId = window.setInterval(function () {
//   console.log("Interval...");
// }, 2000);

// // console.log({
// //   intervalId,
// //   timeoutId,
// // });

// const clearIntervalButton = document.getElementById("clear-interval");
// const clearTimeoutButton = document.getElementById("clear-timeout");
// const createSessionButton = document.getElementById("create-session");

// clearIntervalButton.addEventListener("click", function () {
//   window.clearInterval(intervalId);
// }); 
// // Added missing closing brace

// clearTimeoutButton.addEventListener("click", function () {
//   window.clearTimeout(timeoutId);
// });

// createSessionButton.addEventListener("click", function () {
//   sessionStorage.setItem("username", "Rehman");
//   sessionStorage.setItem("email", "rehman@gmail.com");
// });

// Storage
console.log(window);
console.log(window.localStorage);
console.log(window.sessionStorage);
localStorage.setItem("username", "Rehman");
localStorage.setItem("email", "raheel@gmail.com");


// local ma link paste kar ka koi or tab ma open karny sa show hota hy 



// localStorage.clear();
// localStorage.removeItem("username");

sessionStorage.setItem("username", "Rehman");
sessionStorage.setItem("email", "rehman@gmail.com");

// sessionStorage.setItem("username", "Rehman");
// sessionStorage.setItem("email", "rehman@gmail.com");
// sessionStorage.removeItem("email");
// sessionStorage.clear();

// sessionStorage.removeItem("email");

// Template literals
const personalCookie = `name=Learning Js more; expires=Fri Nov 01 2024 16:55:19 GMT+0500; path=/03-js`;

document.cookie = personalCookie;

const date = new Date();
date.setTime(date.getTime() +1)

document.cookie = "name=tutorialsPoint";
document.cookie ="username=Learning Js; expires=Fri, 01 Nov 2024 04:47:00; path=/03-js/";

console.log(window.document.cookie.getItem("name"));
console.log(window.document.cookie);

// JSON - Javascript Object Notation
const jsObject = {
  name: "Lillian Russell",
  age: "18",
  dob: "2017-11-08",
  gender: "female",
};

console.log(jsObject);
console.log(JSON.stringify(jsObject));
console.log(typeof jsObject);
console.log(typeof JSON.stringify(jsObject));
console.log(JSON.parse(JSON.stringify(jsObject)));