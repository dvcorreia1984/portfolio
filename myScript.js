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
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Mobile first Javascript project',
    description: 'Microverse pair programming project',
    image: 'project1.jpg',
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
  whiteSpace.appendChild(detailsButton);

  projectsContainer.appendChild(projectCard);
});
