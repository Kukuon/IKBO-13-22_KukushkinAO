const storedUsername = "user123";
const storedPassword = "password123";

function loginUser() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  var alertElement = document.getElementById("alert");
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    alertElement.style.display = "none";
    alert("Успешный вход!");


  } else {
    alertElement.style.display = "block";
  }
}
