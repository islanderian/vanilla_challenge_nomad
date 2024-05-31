const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const helloUser = document.querySelector(".login-user h1");

const USER_NAME_KEY = "username";
const HIDDEN_CALSSNAME = "hidden";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = loginInput.value;
  helloUser.innerText = `Hello! ${inputName}`;
  localStorage.setItem(USER_NAME_KEY, inputName);
  loginForm.classList.add(HIDDEN_CALSSNAME);
});

if (localStorage.getItem(USER_NAME_KEY)) {
  helloUser.innerText = `Hello! ${localStorage.getItem(USER_NAME_KEY)}`;
  loginForm.classList.add(HIDDEN_CALSSNAME);
}
