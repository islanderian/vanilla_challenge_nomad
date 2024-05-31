const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const loginUser = document.querySelector(".login-user");
const helloUser = document.querySelector(".user");
const logoutBtn = document.querySelector(".login-user button");

const USER_NAME_KEY = "username";
const HIDDEN_CALSSNAME = "hidden";

function displayUser(user) {
  helloUser.innerText = `${user}`;
  loginUser.classList.remove(HIDDEN_CALSSNAME);
  loginForm.classList.add(HIDDEN_CALSSNAME);
}

// eventListener ////

// login button
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, inputName);

  displayUser(inputName);
});
// logout button
logoutBtn.addEventListener("click", (e) => {
  localStorage.removeItem(USER_NAME_KEY);
  location.reload(true);
});

// main
if (localStorage.getItem(USER_NAME_KEY)) {
  displayUser(localStorage.getItem(USER_NAME_KEY));
}
