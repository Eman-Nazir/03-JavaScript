document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Collecting values
    const name = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    // const gender = document.querySelector('input[name="gender"]:checked').value;
    const gender =  event.target.gender.value ;
  
    // Logging values
    console.table({ name, age, email, gender });
  });