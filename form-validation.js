// Form validation

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

// Local Storage

const formDataObject = {};

form.addEventListener('submit', (e) => {
  const myformData = new FormData(e.target);
  myformData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  const formData = JSON.stringify(formDataObject);
  localStorage.setItem('Data', formData);
});

const userData = JSON.parse(localStorage.getItem('Data'));

