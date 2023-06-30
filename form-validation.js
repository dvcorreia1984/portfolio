const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.textContent = 'Email must be lowercase';
  } else {
    errorMessage.textContent = '';
  }
  errorMessage.style.color = 'red';
});

// Store email in local storage
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('email', email.value);
  form.reset();
}


