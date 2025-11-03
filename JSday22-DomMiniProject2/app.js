// var con =  document.querySelector("#container")
// var icon =  document.querySelector("i")

// con.addEventListener("dblclick" ,function(){
//     icon.style.transform = 'translate(-50%,-50%) scale(1)';
//     icon.style.opacity = 0.8;

//       setTimeout( function (){
//         icon.style.opacity = 0;

//       },1000)
//       setTimeout( function () {
//     icon.style.transform = 'translate(-50%,-50%) scale(0)'
//     },2000)
// })



var con = document.querySelector("#container");
var icon = document.querySelector("i");

con.addEventListener("dblclick", function () {
  icon.style.transform = 'translate(-50%, -50%) scale(1.3)';
  icon.style.opacity = 1;

  setTimeout(function () {
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 300);

  setTimeout(function () {
    icon.style.opacity = 0;
    icon.style.transform = 'translate(-50%, -50%) scale(0)';
  }, 1000);
});




