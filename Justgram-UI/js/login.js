const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#pw-input")
const loginBtn = document.querySelector(".login-btn");

loginBtn.style.cursor = "not-allowed"

function handleInput() {
  let id = idInput.value;
  let pw = pwInput.value;

  if(id.length > 0 && pw.length >0) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#0095f6";
    loginBtn.style.cursor = "pointer"
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#1d60dd8a";
    loginBtn.style.cursor = "not-allowed"
  }
}

idInput.addEventListener("input", handleInput);
pwInput.addEventListener("input", handleInput);
