const form = document.getElementById('form');
const email = document.getElementById('email');

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

window.onload = () => {
  email.value = userData.email;
  document.getElementById('fullname').value = userData.fullName;
  document.getElementById('message').value = userData.message;
};
