const id = document.querySelector(".id");
const pw = document.querySelector(".password");
const btn = document.querySelector(".button");
const form = document.querySelector(".form");

function btnOnOff() {
  if (id.value || pw.value) {
    btn.disabled = true;
    btn.style.backgroundColor = "rgb(178, 223, 252)";
    btn.style.cursor = "not-allowed";
  }
  if (id.value && pw.value) {
    btn.disabled = false;
    btn.style.backgroundColor = "rgb(0, 149, 246)";
    btn.style.cursor = "pointer";
  }
}

id.addEventListener("keyup", btnOnOff);

pw.addEventListener("keyup", btnOnOff);

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
