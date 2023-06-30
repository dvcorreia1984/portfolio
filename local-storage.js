// Retrieve local storage data
const formData = localStorage.getItem('formData');
const dataObject = formData ? JSON.parse(formData) : {};

function updateData(event) {
  const { id, value } = event.target; // Use destructuring
  dataObject[id] = value; // Update the dataObject
  localStorage.setItem('formData', JSON.stringify(dataObject)); // Update the local storage
}

// Select all the inputs
const inputs = document.querySelectorAll('input');

// Add event listeners to the inputs
for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('input', updateData);
}

// Populate the form with the dataObject
Object.entries(dataObject).forEach(([id, value]) => {
  const input = document.getElementById(id);
  if (input) {
    input.value = value;
  }
});
