
const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an email address!');
  } else {
    email.setCustomValidity('Please enter your email in lowercase');
  }

  // Add lowercase validation to email
  if (email.value !== email.value.toLowerCase()) {
    email.setCustomValidity('Please enter your email in lowercase');
  } else {
    email.setCustomValidity('Please enter your email in lowercase' + email.value.toLowerCase());
  }
});
