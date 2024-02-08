document.addEventListener("DOMContentLoaded", function () {
  var togglePassword = document.getElementById("togglePassword");
  var passwordField = document.getElementById("passwordField");

  togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.textContent = "Hide";
    } else {
      passwordField.type = "password";
      togglePassword.textContent = "Show";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById("login");

var phone =  document.getElementById("phone");

var password = document.getElementById("passwordField")

  loginButton.addEventListener("click", function (e) {
 e.preventDefault()
      if (phone.value === "") {
        // If password field is empty, prevent navigation
        alert("enter phone number")
       return;
      } 
      else if(password.value === ""){
        alert("enter password")
      }
      else {
        // If password field is not empty, navigate to another page
        window.location.href = "index2.html";
      }

//   window.location.href = "index2.html"
  });
});
