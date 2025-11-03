// Creating an arbitrary array

console.log(new Array(10));
console.log(Array.from("just something"));
console.log(Array.from({ length: 12 }));

// Tag name
const list = Array.from(document.getElementsByTagName("li"));
console.log(list);

list.forEach(function (element) {
  console.log(element );
  console.log([element]);
  console.log({element});
});

