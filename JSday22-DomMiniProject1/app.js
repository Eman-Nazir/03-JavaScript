var isStatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")

var removeFriend = document.querySelector("#remove")


addFriend.addEventListener("click",function(){
    isStatus.innerHTML = "Friends"
    isStatus.style.color = "green"
})


removeFriend.addEventListener("click",function(){
      isStatus.innerHTML = "Stranger"
    isStatus.style.color = "red"
})


