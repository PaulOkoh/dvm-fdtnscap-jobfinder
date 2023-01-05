const signBtn = document.querySelector('#signinBtn');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

function regLogin() {
  location.href = "index.html"
}



signBtn.addEventListener('click', (e) => {
  e.preventDefault();
  regLogin()
  emailInput.value = ''
  passwordInput.value =''
})



