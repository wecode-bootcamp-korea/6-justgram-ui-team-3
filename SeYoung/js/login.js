/*const emailForm = document.getElementById("email-input-box");
const passwordForm = document.getElementById("password-input-box");
const loginButton = document.getElementById("button-login");

emailForm.addEventListener("keyup", listener);
passwordForm.addEventListener("keyup", listener);

function listener() {
  switch (!(emailForm.value && passwordForm.value)) {
    case true:
      loginButton.disabled = true;
      break;
    case false:
      loginButton.disabled = false;
      break;
  }
}*/

// function listener() {
//   if (!(emailForm.value && passwordForm.value)) {
//     loginButton.disabled = true;
//   } else {
//     loginButton.disabled = false;
//   }
// }

// function listener() {
//   if (emailForm.indexof("@") === -1 || passwordForm.length < 5); {
//     loginButton.disabled = true;
//   } else if (emailForm.indexof("@")>=0 && passwordForm.length >=5)
// }
const loginFormById = document.getElementById("login-form");
const inputIDByID = document.getElementById("email-input-box");
const inputPWbyID = document.getElementById("password-input-box");
const loginButtonByID = document.getElementById("button-login");

function onInput(event) {
  const id = inputIDByID.value;
  const pw = inputPWbyID.value;

  if (id.length > 1 && pw.length > 1) {
    //버튼 활성화하는 로직
    loginButtonByID.style.backgroundColor = "#398cf8";
    loginButtonByID.style.cursor = "pointer";
  } else {
    //버튼 비활성화하는 로직
    loginButtonByID.style.backgroundColor = "#8dbdfc";
    loginButtonByID.style.cursor = "not-allowed";
  }
}

inputIDByID.addEventListener("input", onInput);
inputPWbyID.addEventListener("input", onInput);
loginFormById.addEventListener("submit", (event) => {
  event.preventDefault(); //해당 기능을 꺼버리고
  // 커스텀 로직
});
