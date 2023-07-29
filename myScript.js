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
    name: 'To Do List',
    description: "This app is a simple to-do-list that can add items, mark them as done and delete them. It was built using JavaScript, HTML and CSS. It was a great way to practice DOM manipulation and event listeners. I also used webpack to bundle the files and Jest for testing.",
    description2: "The app is responsive and works on mobile and desktop. - The app uses local storage to save the items. - The app uses webpack to bundle the files. - The app uses Jest for testing.",
    image: './Assets/Projects/To-do-list1.png',
    image2: './Assets/Projects/To-do-list2.png',
    technologies: ['Javascript', 'Jest', 'Webpack'],
    technologies2: ['HTML', 'Github', 'JavaScript', 'Jest', 'Webpack', 'Terminal'],
    liveVersion: 'https://dvcorreia1984.github.io/my-to-do-list/',
    sourceLink: 'https://github.com/dvcorreia1984/my-to-do-list.git',
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
  modal.innerHTML = '';

  // Add container for close button
  const modalCloseBtnContainer = document.createElement('div');
  modalCloseBtnContainer.setAttribute('id', 'modal-container');

  // Add close button
  const modalCloseBtn = document.createElement('button');
  modalCloseBtn.setAttribute('id', 'close-btn-mobile');

  // Add image to close button
  const modalCloseBtnImage = document.createElement('img');
  modalCloseBtnImage.setAttribute('src', './Assets/Popup/close-btn.svg');
  modalCloseBtnImage.setAttribute('id', 'close-btn-image');
  modalCloseBtnImage.setAttribute('alt', 'Close button');
  modalCloseBtn.appendChild(modalCloseBtnImage);

  // Add event listener to close button
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  // Add close button to container
  modalCloseBtnContainer.appendChild(modalCloseBtn);
  modal.appendChild(modalCloseBtnContainer);

  // close modal when clicking on overlay
  overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  // Heading
  const modalTitleHolder = document.createElement('div');
  if (window.innerWidth < 768) { // Mobile version
    const modalText = document.createElement('h3');
    modalText.setAttribute('id', 'modal-title');
    modalText.textContent = project.name;
    modal.appendChild(modalText);
  } else { // Desktop version
    modalTitleHolder.setAttribute('id', 'modal-title-holder');
    const modalText = document.createElement('h3');
    modalText.setAttribute('id', 'modal-title');
    modalText.textContent = project.name;
    modalTitleHolder.appendChild(modalText);
    modal.appendChild(modalTitleHolder);
  }

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

  // Add container for buttons
  const modalButtonHolder = document.createElement('div');
  modalButtonHolder.setAttribute('id', 'modal-button-holder');

  // Add liveversion button
  const modalButton1 = document.createElement('button');
  modalButton1.setAttribute('id', 'modal-button1');
  modalButton1.setAttribute('class', 'modal-button');
  modalButton1.setAttribute('type', 'button');
  modalButton1.setAttribute('onclick', `window.open('${project.liveVersion}', '_blank')`);

  // Add text to button
  const modalButton1Text = document.createElement('p');
  modalButton1Text.setAttribute('id', 'modal-button1-text');
  modalButton1Text.textContent = 'See Live';
  modalButton1.appendChild(modalButton1Text);

  // Add image to button
  const modalButton1Image = document.createElement('img');
  modalButton1Image.setAttribute('src', project.liveVersionLogo);
  modalButton1Image.setAttribute('alt', 'Live version');
  modalButton1.appendChild(modalButton1Image);
  modalButtonHolder.appendChild(modalButton1);

  // Add source code button
  const modalButton2 = document.createElement('button');
  modalButton2.setAttribute('id', 'modal-button2');
  modalButton2.setAttribute('class', 'modal-button');
  modalButton2.setAttribute('type', 'button');
  modalButton2.setAttribute('onclick', `window.open('${project.sourceLink}', '_blank')`);

  // Add text to button
  const modalButton2Text = document.createElement('p');
  modalButton2Text.setAttribute('id', 'modal-button2-text');
  modalButton2Text.textContent = 'See Source';
  modalButton2.appendChild(modalButton2Text);

  // Add image to button
  const modalButton2Image = document.createElement('img');
  modalButton2Image.setAttribute('src', project.sourceCodeLogo);
  modalButton2Image.setAttribute('alt', 'Source code');
  modalButton2.appendChild(modalButton2Image);
  modalButtonHolder.appendChild(modalButton2);

  // Add buttons to modal depending on screen size
  if (window.innerWidth < 768) {
    modal.appendChild(modalButtonHolder);
  } else {
    modalTitleHolder.appendChild(modalButtonHolder);
  }

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

  const image = document.createElement('img');
  image.id = 'project-image';
  image.setAttribute('src', project.image);
  image.setAttribute('alt', 'Project');
  placeHolder.appendChild(image);

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