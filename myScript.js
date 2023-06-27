const menuButton = document.getElementById('menu');
const mySidenav = document.getElementById('mySidenav');

function openNav() {
  const mySidenav = document.getElementById('mySidenav');
  mySidenav.style.width = '100vw';
}

function closeNav() {
  const mySidenav = document.getElementById('mySidenav');
  mySidenav.style.width = '0';
}

menuButton.addEventListener('click', openNav);
mySidenav.addEventListener('click', closeNav);

// Create Array to store project details
const projects = [
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
];

function openPopup(project) {
  // Overlay
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('hidden');

  // Modal
  const modal = document.querySelector('.modal');

  // Add project background image depending on screen size
  let imageSrc;
  if (window.innerWidth < 768) {
    imageSrc = project.image;
  } else {
    imageSrc = project.image2;
  }

  // Add project background image
  const modalImage = document.createElement('img');
  modalImage.setAttribute('src', imageSrc);
  modalImage.setAttribute('class', 'modal-image');
  modal.appendChild(modalImage);

  // Heading
  const modalText = document.createElement('h3');
  modalText.setAttribute('id', 'modal-title');
  modalText.textContent = project.name;
  modal.appendChild(modalText);

  // Add technologies used
  const modalTechnologies = document.createElement('ul');
  modalTechnologies.setAttribute('id', 'modal-technologies');
  for (let i = 0; i < project.technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.textContent = project.technologies[i];
    modalTechnologies.appendChild(listItem);
  }
  modal.appendChild(modalTechnologies);

  // Add project description
  if (window.innerWidth < 768) {
    // Add project description twice for mobile
    const modalDescription = document.createElement('p');
    modalDescription.setAttribute('id', 'modal-description');
    modalDescription.textContent = project.description;
    modal.appendChild(modalDescription);

    const modalDescription2 = document.createElement('p');
    modalDescription2.setAttribute('id', 'modal-description');
    modalDescription2.textContent = project.description;
    modal.appendChild(modalDescription2);
  } else {
    // Add project description once for desktop
    const modalDescription = document.createElement('p');
    modalDescription.setAttribute('id', 'modal-description');
    modalDescription.textContent = project.description;
    modal.appendChild(modalDescription);
  }

  // Add div with class "modal-button-holder"
  const modalButtonHolder = document.createElement('div');
  modalButtonHolder.setAttribute('id', 'modal-button-holder');

  // Add div with class "modal-buttons"
  const modalButtons = document.createElement('div');
  modalButtons.setAttribute('id', 'modal-buttons');
  modalButtons.setAttribute('button', 'modal-buttons');

  // Add button to open live version
  const liveVersion = document.createElement('a');
  liveVersion.setAttribute('button', 'modal-btn');
  liveVersion.setAttribute('href', project.liveVersion);
  liveVersion.setAttribute('target', '_blank');
  liveVersion.setAttribute('class', 'button');
  liveVersion.textContent = 'See Live';

  // Add image to live version button
  const liveVersionImage = document.createElement('img');
  liveVersionImage.setAttribute('src', './Assets/Popup/live.svg');
  liveVersionImage.setAttribute('class', 'button-image');
  liveVersion.appendChild(liveVersionImage);

  modalButtons.appendChild(liveVersion);

  const modalButtons2 = document.createElement('div');
  modalButtons2.setAttribute('id', 'modal-buttons');
  modalButtons2.setAttribute('button', 'modal-buttons');

  // Add button to open source code
  const sourceCode = document.createElement('a');
  sourceCode.setAttribute('button', 'modal-btn');
  sourceCode.setAttribute('href', project.sourceLink);
  sourceCode.setAttribute('target', '_blank');
  sourceCode.setAttribute('class', 'button');
  sourceCode.textContent = 'See Source';

  // Add image to source code button
  const sourceCodeImage = document.createElement('img');
  sourceCodeImage.setAttribute('src', './Assets/Popup/source.svg');
  sourceCodeImage.setAttribute('class', 'button-image');
  sourceCode.appendChild(sourceCodeImage);

  modalButtons2.appendChild(sourceCode);
  modalButtonHolder.appendChild(modalButtons);
  modalButtonHolder.appendChild(modalButtons2);

  modal.appendChild(modalButtonHolder);


  // Unhide modal
  modal.classList.remove('hidden');

  // Buttons
  const openModalBtn = document.querySelector('.btn-open');
  openModalBtn.addEventListener('click', openModalBtn);

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  const closeModalBtn = document.querySelector('.btn-close');
  closeModalBtn.addEventListener('click', closeModal);
}

// Link to HTML document
const projectsContainer = document.getElementById('projects-container');

projects.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('griditem');

  const placeHolder = document.createElement('div');
  placeHolder.classList.add('placeholder');
  projectCard.appendChild(placeHolder);

  const whiteSpace = document.createElement('div');
  whiteSpace.classList.add('whitespace');
  projectCard.appendChild(whiteSpace);

  const name = document.createElement('h3');
  name.textContent = project.name;
  whiteSpace.appendChild(name);

  const technologies = document.createElement('ul');
  technologies.classList.add('minimenu');

  for (let i = 0; i < project.technologies.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.textContent = project.technologies[i];
    listItem.classList.add('button2');
    technologies.appendChild(listItem);
  }

  whiteSpace.appendChild(technologies);

  const detailsButton = document.createElement('button');
  detailsButton.textContent = 'Project Details';
  detailsButton.classList.add('button');
  detailsButton.addEventListener('click', () => openPopup(project));
  whiteSpace.appendChild(detailsButton);

  projectsContainer.appendChild(projectCard);
});