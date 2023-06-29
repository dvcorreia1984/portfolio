const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('msg');

function checkInputs() {
  // trim to remove the whitespaces
  const nameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const msgValue = message.value.trim();

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function isEmail(email) {
    return /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(email);
  }

  if (nameValue === '') {
    setErrorFor(fullname, 'Name cannot be blank');
  } else {
    setSuccessFor(fullname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else if (emailValue !== emailValue.toLowerCase()) {
    setErrorFor(email, 'Email must be lowercase');
  } else {
    setSuccessFor(email);
  }

  if (msgValue === '') {
    setErrorFor(message, 'Message cannot be blank');
  } else {
    setSuccessFor(message);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});
