// Event listeners

// const buttonClickListener = function (event) {
//     console.log(event);
//     console.log("buttonClickListener");
//   };
  


// input type 

// const buttonClickListener = function (event) {
//     console.log(event);
//     console.log("buttonClickListener");
//   };



//   // Button here
  
  // const button = document.getElementById("button");
  // button.addEventListener("click", function (event) {
  //   console.log(event, "Clicked...");
  // });



// main color change 


// const mainElement = document.getElementById("head");
// const  buttonElement = document.getElementById("button");
// buttonElement.addEventListener("click",function(event){
//     mainElement.style.backgroundColor = "teal";
// });


// ATTTIBUTTES 

const newButton = document.querySelector("#new-button")
newButton.innerText = "New Button is Here"
console.log(newButton.getAttribute("id"))
console.log(newButton.getAttribute("class"))
newButton.setAttribute("name" , "new button name ")
newButton.setAttribute("name" , "new button name here again ")
newButton.setAttribute("class" , "button-style")

// newButton.removeAttribute("class")
