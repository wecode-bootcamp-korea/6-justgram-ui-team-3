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
