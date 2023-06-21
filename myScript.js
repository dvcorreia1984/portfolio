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
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    image: 'https://imgtr.ee/images/2023/06/21/mot4U.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    liveVersion: 'https://dvcorreia1984.github.io/portfolio/',
    sourceLink: 'https://github.com/dvcorreia1984/portfolio.git',
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
  popup.document.body.style.fontFamily = 'Roboto, sans-serif';
  popup.resizeTo(375, 882);

  const popupContainer = popup.document.createElement('div');
  popupContainer.classList.add('.popup-container');
  popupContainer.style.padding = '30px';
  popupContainer.style.backgroundColor = '#fff';
  popupContainer.style.borderRadius = '10px';

  //Add project image
  const projectImage = popup.document.createElement('img');
  projectImage.classList.add('popup-image');
  projectImage.src = project.image;
  projectImage.style.display = 'flex';
  projectImage.style.alignItems = 'center';
  projectImage.style.width = '19.4375rem';
  projectImage.style.height = '13.75rem';
  popupContainer.appendChild(projectImage);

  const projectName = popup.document.createElement('h1');
  projectName.textContent = project.name;
  popupContainer.appendChild(projectName);

  const projectTechnologies = popup.document.createElement('ul');
  project.technologies.forEach((tech) => {
    const technology = popup.document.createElement('li');
    technology.style.listStyleType = 'none';
    technology.classList.add('button2');
    technology.textContent = tech;
    projectTechnologies.appendChild(technology);
  });
  popupContainer.appendChild(projectTechnologies);

  

  const projectDescription = popup.document.createElement('p');
  projectDescription.textContent = project.description;
  popupContainer.appendChild(projectDescription);

  const liveVersionButton = popup.document.createElement('button');
  liveVersionButton.textContent = 'See live';
  liveVersionButton.classList.add('button');
  liveVersionButton.style.display = 'flex';
  liveVersionButton.style.alignItems = 'flex-start';
  liveVersionButton.style.backgroundColor = '#36b37f';
  liveVersionButton.style.fontSize = '1.0625rem';
  liveVersionButton.style.color = '#fff';
  liveVersionButton.style.fontWeight = '500';
  liveVersionButton.style.lineHeight = '1.5rem';
  liveVersionButton.style.letterSpacing = '0.03188rem';
  liveVersionButton.style.borderRadius = '4px';
  liveVersionButton.style.padding = '0.75rem 1rem';
  liveVersionButton.style.border = '1px solid #36b37f';
  liveVersionButton.addEventListener('click', () => window.open(project.liveVersion, '_blank'));
  popupContainer.appendChild(liveVersionButton);
  
  const sourceButton = popup.document.createElement('button');
  sourceButton.textContent = 'Source Link';
  sourceButton.classList.add('button');
  sourceButton.style.display = 'flex';
  sourceButton.style.alignItems = 'flex-start';
  sourceButton.style.backgroundColor = '#36b37f';
  sourceButton.style.fontSize = '1.0625rem';
  sourceButton.style.color = '#fff';
  sourceButton.style.fontWeight = '500';
  sourceButton.style.lineHeight = '1.5rem';
  sourceButton.style.letterSpacing = '0.03188rem';
  sourceButton.style.borderRadius = '4px';
  sourceButton.style.padding = '0.75rem 1rem';
  sourceButton.style.border = '1px solid #36b37f';
  sourceButton.addEventListener('click', () => window.open(project.sourceLink, '_blank'));
  popupContainer.appendChild(sourceButton);

  popup.document.body.innerHTML = '';
  popup.document.body.appendChild(popupContainer);
  
}
