


// ANOTHER METHOD 
// for second button we remoe thwe remove button we add freienf amd remove friend by using 1 one button so when we apply this method we should comment the remove button html and css 

var isStatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0 

 btn.addEventListener("click",function(){
    if(check == 0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1 
    }
    else{
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0 
    }
 })