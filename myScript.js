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
    image2: 'https://imgtr.ee/images/2023/06/22/mwCbr.png',
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

  const screenWith = window.innerWidth;

  if (screenWith >= 768) {

  const desktopPopup = window.open('', 'desktopPopup', 'width=600','height=800',);

  desktopPopup.document.body.style.backgroundColor = '#c1c7d0'
  desktopPopup.document.body.style.fontFamily = 'Roboto, sans-serif';
  desktopPopup.document.body.style.display = 'flex';
  desktopPopup.document.body.style.justifyContent = 'center';
  desktopPopup.document.body.style.alignItems = 'center';

  const desktopPopupContainer = desktopPopup.document.createElement('div');
  desktopPopupContainer.classList.add('desktop-container');
  desktopPopupContainer.style.display = 'flex';
  desktopPopupContainer.style.flexDirection = 'column';
  desktopPopupContainer.style.justifyContent = 'center';
  desktopPopupContainer.style.alignItems = 'center';
  desktopPopupContainer.style.padding = '8px';
  desktopPopupContainer.style.borderRadius = '10px';
  desktopPopupContainer.style.width = '80vw';
  desktopPopupContainer.style.height = '88vh';
  desktopPopupContainer.style.backgroundColor = '#fff';

  //create close button top right
  const closeButton = desktopPopup.document.createElement('button');
  closeButton.innerHTML = `<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb25zL0ljb24gLSBDYW5jZWwiPgo8cGF0aCBpZD0iSWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjI5Mjg5IDUuMjkyODlDNS42ODM0MiA0LjkwMjM3IDYuMzE2NTggNC45MDIzNyA2LjcwNzExIDUuMjkyODlMMTIgMTAuNTg1OEwxNy4yOTI5IDUuMjkyODlDMTcuNjgzNCA0LjkwMjM3IDE4LjMxNjYgNC45MDIzNyAxOC43MDcxIDUuMjkyODlDMTkuMDk3NiA1LjY4MzQyIDE5LjA5NzYgNi4zMTY1OCAxOC43MDcxIDYuNzA3MTFMMTMuNDE0MiAxMkwxOC43MDcxIDE3LjI5MjlDMTkuMDk3NiAxNy42ODM0IDE5LjA5NzYgMTguMzE2NiAxOC43MDcxIDE4LjcwNzFDMTguMzE2NiAxOS4wOTc2IDE3LjY4MzQgMTkuMDk3NiAxNy4yOTI5IDE4LjcwNzFMMTIgMTMuNDE0Mkw2LjcwNzExIDE4LjcwNzFDNi4zMTY1OCAxOS4wOTc2IDUuNjgzNDIgMTkuMDk3NiA1LjI5Mjg5IDE4LjcwNzFDNC45MDIzNyAxOC4zMTY2IDQuOTAyMzcgMTcuNjgzNCA1LjI5Mjg5IDE3LjI5MjlMMTAuNTg1OCAxMkw1LjI5Mjg5IDYuNzA3MTFDNC45MDIzNyA2LjMxNjU4IDQuOTAyMzcgNS42ODM0MiA1LjI5Mjg5IDUuMjkyODlaIiBmaWxsPSIjNjc3OThFIi8+CjwvZz4KPC9zdmc+Cg==" alt="" />`;
  closeButton.classList.add('close-button');
  closeButton.style.display = 'flex';
  closeButton.style.flexDirection = 'row-reverse';
  closeButton.style.alignItems = 'flex-start';
  closeButton.style.marginLeft = '66vw';
  closeButton.addEventListener('click', () => desktopPopup.close());
  desktopPopupContainer.appendChild(closeButton);

  //Add project image
  const projectImage = desktopPopup.document.createElement('img');
  projectImage.classList.add('desktop-image');
  projectImage.src = project.image2;
  projectImage.style.display = 'flex';
  projectImage.style.alignItems = 'center';
  desktopPopupContainer.appendChild(projectImage);

  const projectName = desktopPopup.document.createElement('h1');
  projectName.textContent = project.name;
  desktopPopupContainer.appendChild(projectName);

  const projectTechnologies = desktopPopup.document.createElement('ul');
  projectTechnologies.style.display = 'flex';
  projectTechnologies.style.paddingLeft = '0';

  project.technologies.forEach((tech) => {
    const technology = desktopPopup.document.createElement('li');
    technology.style.display = 'flex';
    technology.style.alignItems = 'center';
    technology.style.listStyleType = 'none';
    technology.style.color = '#3a4a42'; 
    technology.style.fontSize = '0.75rem';
    technology.style.fontWeight = '600';
    technology.style.lineHeight = '1rem';
    technology.style.letterSpacing = '0.0225rem';
    technology.style.backgroundColor = '#ebF0ee';
    technology.style.padding = '0.5rem 0.75rem';
    technology.style.borderRadius = '4px';
    technology.style.marginRight = '0.5rem';
    technology.textContent = tech;
    projectTechnologies.appendChild(technology);
  });
  desktopPopupContainer.appendChild(projectTechnologies);

  const projectDescription = desktopPopup.document.createElement('p');
  projectDescription.textContent = project.description;
  projectDescription.style.fontSize = '1rem';
  projectDescription.style.lineHeight = '1.5rem';
  projectDescription.style.color = '#344563';
  desktopPopupContainer.appendChild(projectDescription);

  const liveVersionButton = desktopPopup.document.createElement('button');
  liveVersionButton.innerHTML =`<div class=desktop-button" href="${project.liveVersion}" target="_blank">See live</div>&nbsp;&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb25zL0ljb24gLSBFeHBvcnQiPgo8cGF0aCBpZD0ic2VlIGxpdmUgaWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDEyQzUgOC4xMzQwMSA4LjEzNDAxIDUgMTIgNUMxMi41NTIzIDUgMTMgNC41NTIyOCAxMyA0QzEzIDMuNDQ3NzIgMTIuNTUyMyAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSAxMS40NDc3IDIwLjU1MjMgMTEgMjAgMTFDMTkuNDQ3NyAxMSAxOSAxMS40NDc3IDE5IDEyQzE5IDE1Ljg2NiAxNS44NjYgMTkgMTIgMTlDOC4xMzQwMSAxOSA1IDE1Ljg2NiA1IDEyWk0xNiAzQzE1LjQ0NzcgMyAxNSAzLjQ0NzcyIDE1IDRDMTUgNC41NTIyOCAxNS40NDc3IDUgMTYgNUgxNy41ODU4TDExLjI5MjkgMTEuMjkyOUMxMC45MDI0IDExLjY4MzQgMTAuOTAyNCAxMi4zMTY2IDExLjI5MjkgMTIuNzA3MUMxMS42ODM0IDEzLjA5NzYgMTIuMzE2NiAxMy4wOTc2IDEyLjcwNzEgMTIuNzA3MUwxOSA2LjQxNDIxVjhDMTkgOC41NTIyOCAxOS40NDc3IDkgMjAgOUMyMC41NTIzIDkgMjEgOC41NTIyOCAyMSA4VjRDMjEgMy40NDc3MiAyMC41NTIzIDMgMjAgM0gxNloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg==" alt="" />`;
  liveVersionButton.classList.add('button');
  liveVersionButton.style.display = 'flex';
  liveVersionButton.style.marginRight = '0.5rem';
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
  desktopPopupContainer.appendChild(liveVersionButton);

  const sourceButton = desktopPopup.document.createElement('button');
  sourceButton.innerHTML = `<div class="popup-button" href="${project.sourceLink}" target="_blank">See source</div>&nbsp;&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkZyYW1lIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDhfMjIyNSkiPgo8ZyBpZD0iR3JvdXAiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTcuOTk5MiA3LjQ2MTE0QzE3Ljk5OTIgNi4zMjEyNCAxNy42MzMyIDUuMjUwNDMgMTYuOTM0NSA0LjMxNzc5QzE3LjIwMDcgMy40MTk2OSAxNy4yNjcyIDIuMjc5NzkgMTcuMjAwNyAwLjk2NzE4NUMxNy4xNjc0IDAuNDE0NTA4IDE2LjczNDkgMCAxNi4yMDI1IDBDMTUuOTAzMSAwIDEzLjM3NDQgMC4wMzQ1NDIzIDExLjkxMDUgMS4zODE2OUMxMC42NDYxIDEuMTM5OSA5LjMxNTI2IDEuMTM5OSA4LjAxNzY2IDEuMzgxNjlDNi41ODY5OCAwLjAzNDU0MjMgNC4wNTgzMyAwIDMuNzI1NjEgMEMzLjE5MzI2IDAgMi43NjA3MyAwLjQxNDUwOCAyLjcyNzQ2IDAuOTY3MTg1QzIuNjI3NjQgMi4yNzk3OSAyLjcyNzQ2IDMuNDE5NjkgMi45OTM2MyA0LjMxNzc5QzIuMjk0OTIgNS4yODQ5NyAxLjkyODk0IDYuMzU1NzkgMS45Mjg5NCA3LjQ2MTE0QzEuOTI4OTQgOS44NzkxIDMuNzI1NjEgMTIuMDU1MyA2LjQ1Mzg5IDEzLjA5MTVDNi4zNTQwNyAxMy4yOTg4IDYuMjg3NTMgMTMuNTQwNiA2LjIyMDk5IDEzLjc4MjRDMy4zMjYzNSAxMy40NzE1IDEuOTYyMjEgMTAuNzQyNyAxLjg5NTY2IDEwLjYzOUMxLjY2Mjc2IDEwLjEyMDkgMS4wNjM4NyA5LjkxMzY0IDAuNTY0Nzk1IDEwLjE5QzAuMDY1NzE5NiAxMC40MzE4IC0wLjEzMzkxMSAxMS4wNTM1IDAuMTMyMjYzIDExLjU3MTdDMC4xOTg4MDYgMTEuNzQ0NCAyLjAyODc1IDE1LjQ0MDQgNi4wNTQ2MyAxNS44NTQ5VjE4Ljk2MzdDNi4wNTQ2MyAxOS41NTA5IDYuNDg3MTYgMjAgNy4wNTI3OCAyMEgxMi44NzUzQzEzLjQ0MSAyMCAxMy44NzM1IDE5LjU1MDkgMTMuODczNSAxOC45NjM3VjE0Ljg1MzJDMTMuODczNSAxNC4yMzE0IDEzLjc0MDQgMTMuNjQ0MiAxMy41MDc1IDEzLjEyNjFDMTYuMjAyNSAxMi4wNTUzIDE3Ljk5OTIgOS45MTM2NCAxNy45OTkyIDcuNDYxMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDhfMjIyNSI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" href="https://github.com/dvcorreia1984/portfolio.git" alt="github"/>`
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
  desktopPopupContainer.appendChild(sourceButton);

  desktopPopup.document.body.appendChild(desktopPopupContainer);
  
  }

  else {
  
    const popup = window.open('', 'Popup', 'width=375','height=882',);
  popup.document.body.style.backgroundColor = '#c1c7d0';
  popup.document.body.style.fontFamily = 'Roboto, sans-serif';
  popup.resizeTo(375, 882);

  const popupContainer = popup.document.createElement('div');
  popupContainer.classList.add('.popup-container');
  popupContainer.style.padding = '15px';
  popupContainer.style.backgroundColor = '#fff';
  popupContainer.style.borderRadius = '10px';

  //Add project image
  const projectImage = popup.document.createElement('img');
  projectImage.classList.add('popup-image');
  projectImage.src = project.image;
  projectImage.style.display = 'flex';
  projectImage.style.alignItems = 'center';
  projectImage.style.width = '83vw';
  projectImage.style.height = '25vh';
  popupContainer.appendChild(projectImage);

  const projectName = popup.document.createElement('h1');
  projectName.textContent = project.name;
  popupContainer.appendChild(projectName);

  const projectTechnologies = popup.document.createElement('ul');
  projectTechnologies.style.display = 'flex';
  projectTechnologies.style.paddingLeft = '0';
  
  project.technologies.forEach((tech) => {
    const technology = popup.document.createElement('li');
    technology.style.display = 'flex';
    technology.style.alignItems = 'center';
    technology.style.listStyleType = 'none';
    technology.style.color = '#3a4a42';
    technology.style.fontSize = '0.75rem';
    technology.style.fontWeight = '600';
    technology.style.lineHeight = '1rem';
    technology.style.letterSpacing = '0.0225rem';
    technology.style.backgroundColor = '#ebF0ee';
    technology.style.padding = '0.5rem 0.75rem';
    technology.style.borderRadius = '4px';
    technology.style.marginRight = '0.5rem';
    technology.textContent = tech;
    projectTechnologies.appendChild(technology);
  });
  popupContainer.appendChild(projectTechnologies);

  const projectDescription = popup.document.createElement('p');
  projectDescription.textContent = project.description;
  projectDescription.style.fontSize = '1rem';
  projectDescription.style.lineHeight = '1.5rem';
  projectDescription.style.color = '#344563';
  popupContainer.appendChild(projectDescription);

  const projectDescription2 = popup.document.createElement('p');
  projectDescription2.textContent = project.description;
  projectDescription2.style.fontSize = '1rem';
  projectDescription2.style.lineHeight = '1.5rem';
  projectDescription2.style.color = '#344563';
  popupContainer.appendChild(projectDescription2);

  const liveVersionButton = popup.document.createElement('button');
  liveVersionButton.innerHTML =`<div class="popup-button" href="${project.liveVersion}" target="_blank">See live</div>&nbsp;&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb25zL0ljb24gLSBFeHBvcnQiPgo8cGF0aCBpZD0ic2VlIGxpdmUgaWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDEyQzUgOC4xMzQwMSA4LjEzNDAxIDUgMTIgNUMxMi41NTIzIDUgMTMgNC41NTIyOCAxMyA0QzEzIDMuNDQ3NzIgMTIuNTUyMyAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSAxMS40NDc3IDIwLjU1MjMgMTEgMjAgMTFDMTkuNDQ3NyAxMSAxOSAxMS40NDc3IDE5IDEyQzE5IDE1Ljg2NiAxNS44NjYgMTkgMTIgMTlDOC4xMzQwMSAxOSA1IDE1Ljg2NiA1IDEyWk0xNiAzQzE1LjQ0NzcgMyAxNSAzLjQ0NzcyIDE1IDRDMTUgNC41NTIyOCAxNS40NDc3IDUgMTYgNUgxNy41ODU4TDExLjI5MjkgMTEuMjkyOUMxMC45MDI0IDExLjY4MzQgMTAuOTAyNCAxMi4zMTY2IDExLjI5MjkgMTIuNzA3MUMxMS42ODM0IDEzLjA5NzYgMTIuMzE2NiAxMy4wOTc2IDEyLjcwNzEgMTIuNzA3MUwxOSA2LjQxNDIxVjhDMTkgOC41NTIyOCAxOS40NDc3IDkgMjAgOUMyMC41NTIzIDkgMjEgOC41NTIyOCAyMSA4VjRDMjEgMy40NDc3MiAyMC41NTIzIDMgMjAgM0gxNloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9zdmc+Cg==" alt="" />`;
  liveVersionButton.classList.add('button');
  liveVersionButton.style.display = 'flex';
  liveVersionButton.style.float = 'left';
  liveVersionButton.style.marginRight = '0.5rem';
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
  sourceButton.innerHTML = `<div class="popup-button" href="${project.sourceLink}" target="_blank">See source</div>&nbsp;&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkZyYW1lIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDhfMjIyNSkiPgo8ZyBpZD0iR3JvdXAiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTcuOTk5MiA3LjQ2MTE0QzE3Ljk5OTIgNi4zMjEyNCAxNy42MzMyIDUuMjUwNDMgMTYuOTM0NSA0LjMxNzc5QzE3LjIwMDcgMy40MTk2OSAxNy4yNjcyIDIuMjc5NzkgMTcuMjAwNyAwLjk2NzE4NUMxNy4xNjc0IDAuNDE0NTA4IDE2LjczNDkgMCAxNi4yMDI1IDBDMTUuOTAzMSAwIDEzLjM3NDQgMC4wMzQ1NDIzIDExLjkxMDUgMS4zODE2OUMxMC42NDYxIDEuMTM5OSA5LjMxNTI2IDEuMTM5OSA4LjAxNzY2IDEuMzgxNjlDNi41ODY5OCAwLjAzNDU0MjMgNC4wNTgzMyAwIDMuNzI1NjEgMEMzLjE5MzI2IDAgMi43NjA3MyAwLjQxNDUwOCAyLjcyNzQ2IDAuOTY3MTg1QzIuNjI3NjQgMi4yNzk3OSAyLjcyNzQ2IDMuNDE5NjkgMi45OTM2MyA0LjMxNzc5QzIuMjk0OTIgNS4yODQ5NyAxLjkyODk0IDYuMzU1NzkgMS45Mjg5NCA3LjQ2MTE0QzEuOTI4OTQgOS44NzkxIDMuNzI1NjEgMTIuMDU1MyA2LjQ1Mzg5IDEzLjA5MTVDNi4zNTQwNyAxMy4yOTg4IDYuMjg3NTMgMTMuNTQwNiA2LjIyMDk5IDEzLjc4MjRDMy4zMjYzNSAxMy40NzE1IDEuOTYyMjEgMTAuNzQyNyAxLjg5NTY2IDEwLjYzOUMxLjY2Mjc2IDEwLjEyMDkgMS4wNjM4NyA5LjkxMzY0IDAuNTY0Nzk1IDEwLjE5QzAuMDY1NzE5NiAxMC40MzE4IC0wLjEzMzkxMSAxMS4wNTM1IDAuMTMyMjYzIDExLjU3MTdDMC4xOTg4MDYgMTEuNzQ0NCAyLjAyODc1IDE1LjQ0MDQgNi4wNTQ2MyAxNS44NTQ5VjE4Ljk2MzdDNi4wNTQ2MyAxOS41NTA5IDYuNDg3MTYgMjAgNy4wNTI3OCAyMEgxMi44NzUzQzEzLjQ0MSAyMCAxMy44NzM1IDE5LjU1MDkgMTMuODczNSAxOC45NjM3VjE0Ljg1MzJDMTMuODczNSAxNC4yMzE0IDEzLjc0MDQgMTMuNjQ0MiAxMy41MDc1IDEzLjEyNjFDMTYuMjAyNSAxMi4wNTUzIDE3Ljk5OTIgOS45MTM2NCAxNy45OTkyIDcuNDYxMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDhfMjIyNSI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" href="https://github.com/dvcorreia1984/portfolio.git" alt="github"/>`
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

  
  
}
