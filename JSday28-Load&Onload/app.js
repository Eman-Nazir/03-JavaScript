 window.addEventListener('DOMContentLoaded', function() {
console.log("DOM Tree Created")
 })
    
 window.addEventListener('load', function() {
    console.log("fully Loaded")
     })
        

// Add load event to particular element 
// its mean jab image load aye ga ty consle show ho ga 
// ham load event ko waha waha use akr sakty hy ka jab koi  cheez complete hony ka bad triggered ho to ham load event use kar sakty hy us element par  


let img = document.getElementById("image-1")

img.addEventListener('load', function() {
    console.log("fully Loaded")
     })


// ONLOAD 


function image_load(){
    alert(" Image Uploaded Successfully")
}

