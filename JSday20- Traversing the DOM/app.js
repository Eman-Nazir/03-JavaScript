// appendChild
// append
// prepend

const first = document.querySelector(".first");
const second = document.querySelector(".second");

// debugger;
// const copiedElement = first.cloneNode(false);
const copiedElement = first.cloneNode(true);
second.appendChild(copiedElement);

// Traversing the DOM
console.log(first.children);
console.log(first.childNodes);
console.log(first.nextSibling);
console.log(first.nextElementSibling);
console.log(first.previousSibling);
console.log(first.previousElementSibling);
console.log(first.parentNode);
console.log(first.parentElement);
console.log(document.body.childElementCount);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

// classList

const checkbox = document.querySelector("#custom-check");
checkbox.classList.add("active-check-styles");
console.log(checkbox.classList);
// debugger;
checkbox.classList.remove("active-check-styles");
console.log(checkbox.classList.contains("check-base-styles"));

// checkbox.addEventListener("click", function (event) {
//   if (checkbox.classList.contains("active-check-styles")) {
//     checkbox.classList.remove("active-check-styles");
//   } else {
//     checkbox.classList.add("active-check-styles");
//   }
// })

checkbox.addEventListener("click", function (event) {
  event.target.classList.toggle("active-check-styles");
});