// moduleA.js
import { setColor as changeColor, resetBackgroundColor as resetColor } from './moduleB.js';

// Add event listeners for buttons
document.getElementById('btnRed').addEventListener('click', function () {
    changeColor('red');
});

document.getElementById('btnBlue').addEventListener('click', function () {
    changeColor('blue');
});

document.getElementById('btnGreen').addEventListener('click', function () {
    changeColor('green');
});

document.getElementById('btnReset').addEventListener('click', function () {
    resetColor();
});