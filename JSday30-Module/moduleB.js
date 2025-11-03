// moduleB.js

// Function to change the background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to reset the background color
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Export functions with aliases
export { changeBackgroundColor as setColor, resetBackgroundColor as resetBackgroundColor }