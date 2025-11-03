// Select a child element
// const child = document.querySelector('.child');

// Traversing using Node properties

// const parentNode = child.parentNode; 
// const childNodes = parentNode.childNodes; 
// const firstNode = parentNode.firstChild; 
// const lastNode = parentNode.lastChild; 
// const nextNode = child.nextSibling; 
// const previousNode = child.previousSibling; 



// console.log('Parent Node:', parentNode);
// console.log('Child Nodes:', childNodes);
// console.log('First Node:', firstNode);
// console.log('Last Node:', lastNode);
// console.log('Next Node:', nextNode);
// console.log('Previous Node:', previousNode);

// Traversing using Element properties

const parentElement = child.parentElement; 
const childElements = parentElement.children;
const firstElement = parentElement.firstElementChild; 
const lastElement = parentElement.lastElementChild; 
const nextElement = child.nextElementSibling; 
const previousElement = child.previousElementSibling; 


console.log('Parent Element:', parentElement);
console.log('Child Elements:', childElements);
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);
console.log('Next Element:', nextElement);
console.log('Previous Element:', previousElement);




//  add and remove element


// const myList = document.getElementById('myList');
// const addItemButton = document.getElementById('addItemButton');

// // Add item functionality
// addItemButton.addEventListener('click', function() {
//     // Create a new list item
//     const newItem = document.createElement('li');
//     newItem.textContent = 'Item ' + (myList.children.length + 1);

//     // Create a remove button for the new item
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.className = 'removeButton';

//     // Add event listener for the remove button
//     removeButton.addEventListener('click', function() {
//         newItem.remove(); // Removes the new item
//     });

//     newItem.appendChild(removeButton); // Append the button to the new item
//     myList.appendChild(newItem); // Append the new item to the list
// });

// // Remove item functionality
// var removeButtons = myList.querySelectorAll('.removeButton');
// removeButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         var listItem = button.parentElement;
//         listItem.remove(); // Removes the <li> from the DOM
//     });
// });