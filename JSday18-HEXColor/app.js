
// MATH 

// CEIL (larger integer value ma round off kar deta hy 
// nearest larger )

// var a = Math.ceil(5.7)
// var a = Math.ceil(2.2)
// var a = Math.ceil(4.1)
// var a = Math.ceil(10.1)
// var a = Math.ceil(10.0)   //10
// var a = Math.ceil(8)
// var a = Math.ceil(10)
// var a = Math.ceil(-2.6)
// var a = Math.ceil(-10.66666) 
// var a = Math.ceil(-5.55555) 
// console.log(a)


// FLOOR ( round off orignal sa kam ya equall value dy ga
// nearest smallest value)

// var a = Math.floor(2.3)
// var a = Math.floor(2.9)
// var a = Math.floor(10.9)w
// var a = Math.floor(15.9)
// var a = Math.floor(15.0)
// var a = Math.floor(0.1)
// var a = Math.floor(-15.1)
// var a = Math.floor(-15.0)
// console.log(a) 


// ROUND (INCREMENT AFTER POINT IS 5 

// var a = Math.round(2.9)
// var a = Math.round(2.20)
// var a = Math.round(5.0)
// var a = Math.round(7.2)
// var a = Math.round(9.90)
// var a = Math.round(9)
// console.log(a)


// RANDOM  (give value btwn 0 and 1 )


// var a = Math.random()  // by default give value btwn 0 and 1  and not give 1
// console.log(a)


// var a = (Math.random() * 10);
// console.log(a)



// var a = Math.round(Math.random() * 10) 
// console.log(a)


// var a = Math.ceil(Math.random() * 10)   // show value btwn 1 to 10
// console.log(a)


// var a = Math.floor(Math.random() * 10);    // show value btwn 0 to 9
// console.log(a)


// var a = Math.floor(Math.random() * 50) + 1;
// console.log(a)


// we use +1 to show numbers 1 to 50 
// instead of 0 to 49 




// Random Color Genrator  1st method 
// Alert behave starnge 

// const container = document.getElementById("container");
// const button = document.getElementById("button");
// const output = document.getElementById("output");


// function genratorColor(){
//     let hexCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//     let color = "#";
//     for(i=0;i<6;i++) {
//         let num1 = Math.floor(Math.random() * 16);
//         let num2 = hexCodes[num1]
//         color += num2;
//     }
//        container.style.backgroundColor = color
//        output.innerText = color


//        output.addEventListener("click", function () {
//         window.navigator.clipboard.writeText(color);
//          alert("Color copied to clipboard")
         
//     //  confirm("Color copied to clipboard")
//     // prompt("Color copied to clipboard")
//         // output.style.display = "none";
//       });
// }

//   when alert is set 

const container = document.getElementById("container");
const button = document.getElementById("button");
const output = document.getElementById("output");

let color = ""; // Move color to a global scope to store the current color

function genratorColor() {
    let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    color = "#"; // Reset the color string
    for (let i = 0; i < 6; i++) {
        let num1 = Math.floor(Math.random() * 16);
        let num2 = hexCodes[num1];
        color += num2;
    }
    container.style.backgroundColor = color;
    output.innerText = color;
}

// Add the event listener only once
output.addEventListener("click", function () {
    if (color) {
        window.navigator.clipboard.writeText(color);
        alert("Color copied to clipboard");
    }
});




// to see clipboard press window icon and v 









// Another way 


// const button = document.getElementById("button");
// const container = document.getElementById("container");
// const output = document.getElementById("output");


// const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const generateRandomHex = function () {
//   return Math.floor(Math.random() * 16);
// };

// button.addEventListener("click", function () {
//   let Color = "#";
//   for (let i = 0; i < 6; i++) {
//     Color += HEX[generateRandomHex()];
//   }
//  container.style.backgroundColor = Color;
//        output.innerText = Color

// });



// MULTIPLE BUTTON 

// Random Color Generator 

// const container = document.getElementById("container");
// const output = document.getElementById("output");

// function generatorColor() {
//     let hexCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//     let color = "#";
//     for (var i = 0; i < 6; i++) {
//         let num1 = Math.floor(Math.random() * 16);
//         color += hexCodes[num1];
//     }
//     container.style.backgroundColor = color;
//     output.innerText = color;
// }

// document.getElementById("button1").onclick = generatorColor;
// document.getElementById("button2").onclick = generatorColor;
