document.getElementById("set-local-storage").addEventListener("click", function () {
    localStorage.setItem("name", "Hania");
    localStorage.setItem("profession", "Software Engineer");
    localStorage.setItem("location", "Karachi");
    localStorage.setItem("hobby", "Reading books");
    localStorage.setItem("experience", "3 years");
    localStorage.setItem("learning", "MERN Stack Development");
    localStorage.setItem("goal", "Become a top developer");
    console.log("Local storage set!");
  });
  document.getElementById("clear-local-storage").addEventListener("click", function () {
    localStorage.clear();
    console.log("Local storage cleared!");
  });
  document.getElementById("set-session-storage").addEventListener("click", function () {
    sessionStorage.setItem("name", "Hania");
    sessionStorage.setItem("email", "hania@gmail.com");
    sessionStorage.setItem("role", "Frontend Developer");
    sessionStorage.setItem("project", "Real Estate Web App");
    sessionStorage.setItem("interests", "Coding, Design");
    sessionStorage.setItem("workplace", "Remote");
    sessionStorage.setItem("certifications", "AWS Certified Developer");
    console.log("Session storage set!");
  });

  document.getElementById("clear-session-storage").addEventListener("click", function () {
    sessionStorage.clear();
    console.log("Session storage cleared!");
  });

  document.getElementById("set-cookies").addEventListener("click", function () {
    document.cookie = "username=Hania; expires=Fri, 01 April 2025 12:00:00 UTC; SameSite=Lax; path=/";
document.cookie = "role=Frontend Developer; expires=Fri, 01 April 2025 12:00:00 UTC; SameSite=Lax; path=/";
document.cookie = "project=Real Estate App; expires=Fri, 01 April 2025 12:00:00 UTC; SameSite=Lax; path=/";

console.log("Cookies set successfully!");
console.log(document.cookie);
  });

