
const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('I am expecting an email address!');
  } else {
    email.setCustomValidity('');
  }

  // Add lowercase validation
  if (email.value !== email.value.toLowerCase()) {
    email.setCustomValidity('Email address must be lowercase!');
  } else {
    email.setCustomValidity('');
  }
});
