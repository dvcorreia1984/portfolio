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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
    liveVersionLogo: 'Assets/Popup/live.svg',
    sourceCodeLogo: 'Assets/Popup/source.svg',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: 'Assets/Popup/popup-mobile.png',
    image2: 'Assets/Popup/Desktopimage.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologies2: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
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
  } else { // Add close button above desktop image
    imageSrc = project.image2;
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('id', 'close-btn-desktop');
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
    modal.appendChild(closeBtn);
  }

  // Add project background image
  const modalImage = document.createElement('img');
  modalImage.setAttribute('src', imageSrc);
  modalImage.setAttribute('class', 'modal-image');
  modalImage.setAttribute('alt', 'Mobile version of project');
  modalImage.setAttribute('usemap', '#closemap');
  modal.appendChild(modalImage);

  // Add imagemap to background image mobile version
  const imageMap = document.createElement('map');
  imageMap.setAttribute('name', 'closemap');
  const imageMapArea = document.createElement('area');
  imageMapArea.setAttribute('shape', 'rect');
  imageMapArea.setAttribute('coords', '0,0,50%,50%');

  // Add event listener to close modal when clicking on background image
  imageMapArea.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  modal.appendChild(imageMapArea);
  modal.appendChild(imageMap);

  // close modal when clicking on overlay
  overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  // Heading
  const modalText = document.createElement('h3');
  modalText.setAttribute('id', 'modal-title');
  modalText.textContent = project.name;
  modal.appendChild(modalText);

  if (window.innerWidth < 768) {
    // Add technologies used for mobile version
    const modalTechnologies = document.createElement('ul');
    modalTechnologies.setAttribute('id', 'modal-technologies');
    for (let i = 0; i < project.technologies.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.textContent = project.technologies[i];
      modalTechnologies.appendChild(listItem);
    }
    modal.appendChild(modalTechnologies);
  } else { // Add technologies used for desktop version
    const modalTechnologies2 = document.createElement('ul');
    modalTechnologies2.setAttribute('id', 'modal-technologies');
    for (let i = 0; i < project.technologies2.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.textContent = project.technologies2[i];
      modalTechnologies2.appendChild(listItem);
    }
    modal.appendChild(modalTechnologies2);
  }

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
    const modalDescription2 = document.createElement('p');
    modalDescription2.setAttribute('id', 'modal-description2');
    modalDescription2.textContent = project.description2;
    modal.appendChild(modalDescription2);
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