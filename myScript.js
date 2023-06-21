// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('mySidenav').style.width = '100vw';
  document.getElementById('main').style.marginLeft = '250px';
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

// Create Array to store project details
const projects = [
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: './Assets/Popup/Snapshoot Portfolio.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  
];

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

function openPopup(project) {
  const popup = window.open('', 'Popup', 'width=375','height=882',);
  popup.document.body.style.backgroundColor = '#c1c7d0';
  popup.resizeTo(375, 882);

  const popupContainer = popup.document.createElement('div');
  popupContainer.classList.add('.popup-container');
  popupContainer.style.padding = '30px';
  popupContainer.style.backgroundColor = '#fff';
  popupContainer.style.borderRadius = '10px';

  //Add project image
  const projectImage = popup.document.createElement('img');
  projectImage.src = project.image;
  projectImage.style.width = '100%';
  projectImage.style.borderRadius = '10px';
  popupContainer.appendChild(projectImage);

  const projectName = popup.document.createElement('h1');
  projectName.textContent = project.name;
  popupContainer.appendChild(projectName);

  const projectDescription = popup.document.createElement('p');
  projectDescription.textContent = project.description;
  popupContainer.appendChild(projectDescription);

  const projectTechnologies = popup.document.createElement('ul');
  project.technologies.forEach((tech) => {
    const technology = popup.document.createElement('li');
    technology.textContent = tech;
    projectTechnologies.appendChild(technology);
  });
  popupContainer.appendChild(projectTechnologies);

  const liveVersionLink = popup.document.createElement('a');
  liveVersionLink.href = project.liveVersion;
  liveVersionLink.target = '_blank';
  liveVersionLink.textContent = 'Live Version';
  popupContainer.appendChild(liveVersionLink);

  const sourceLink = popup.document.createElement('a');
  sourceLink.href = project.sourceLink;
  sourceLink.target = '_blank';
  sourceLink.textContent = 'Source Link';
  popupContainer.appendChild(sourceLink);

  popup.document.body.innerHTML = '';
  popup.document.body.appendChild(popupContainer);
  
}






