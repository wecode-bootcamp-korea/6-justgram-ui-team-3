const idById = document.getElementById("login_id");
const pwById = document.getElementById("login_pw");
const buttonById = document.getElementById("login_button");
const loginFormById = document.getElementById("login-form");

function onInput() {
  //기명함수
  const id = idById.value;
  const pw = pwById.value;

  if (id.length > 1 && pw.length > 1) {
    //버튼을활성화하는 로직
    buttonById.style.backgroundColor = "#4ec5f4";
    buttonById.style.cursor = "pointer";
    buttonById.disabled = "false";
  } else {
    //버튼을 비활성화 하는 로직
    buttonById.style.backgroundColor = "#aeddf3";
    buttonById.style.cursor = "not-allowed";
    buttonById.disabled = "true";
  }
}

idById.addEventListener("input", onInput); //익명함수 //이벤트 매개변수 기입
pwById.addEventListener("input", onInput);
loginFormById.addEventListener("submit", (event) => {
  event.preventDefault(); //
});
