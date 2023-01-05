const admSignBtn = document.querySelector('#admSigninBtn');
const admEmailInput = document.querySelector('#email-adm');
const passwordInput = document.querySelector('#password-adm');

function admLogin() {
  location.href = "admhome.html"
}



admSignBtn.addEventListener('click', (e) => {
  e.preventDefault();
  admLogin()
  admEmailInput.value = ''
  admPasswordInput.value =''
})
