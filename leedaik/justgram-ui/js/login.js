const loginBtn = document.querySelector('button');
const idInput = document.querySelector('input#id');
const pwInput = document.querySelector('input#password');

const checkHandler = () => {
  if (idInput instanceof HTMLInputElement && pwInput instanceof HTMLInputElement) {
    if (idInput.value.includes('@') && pwInput.value.length >= 5) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }
};

idInput.addEventListener('input', checkHandler);
pwInput.addEventListener('input', checkHandler);
