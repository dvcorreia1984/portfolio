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
    liveVersionLogo: './Assets/',
    sourceCodeLogo: '',
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

// Overlay
const overlay = document.querySelector(".overlay");
overlay.classList.remove("hidden")

//Modal
const modal = document.querySelector(".modal");


const modalText = document.createElement("h3");
modalText.setAttribute("id", "modal-title");
modalText.textContent = project.name;
modal.appendChild(modalText);

//Add project description
const modalDescription = document.createElement("p");
modalDescription.setAttribute("id", "modal-description");
modalDescription.textContent = project.description;
modal.appendChild(modalDescription);

const modalDescription2 = document.createElement("p");
modalDescription2.setAttribute("id", "modal-description");
modalDescription2.textContent = project.description;
modal.appendChild(modalDescription2);

//Add div with class "modal-buttons"
const modalButtons = document.createElement("div");
modalButtons.setAttribute("class", "modal-buttons");
//Add button to open live version
const liveVersion = document.createElement("a");
liveVersion.setAttribute("href", project.liveVersion);
liveVersion.setAttribute("target", "_blank");
liveVersion.setAttribute("class", "button");

liveVersion.textContent = "Live Version";
//Add image to live version button
const liveVersionImage = document.createElement("img");
liveVersionImage.setAttribute("src", "#");
liveVersionImage.setAttribute("class", "button-image");
liveVersion.appendChild(liveVersionImage);

modalButtons.appendChild(liveVersion);

//Add button to open source code
const sourceCode = document.createElement("a");
sourceCode.setAttribute("href", project.sourceLink);
sourceCode.setAttribute("target", "_blank");
sourceCode.setAttribute("class", "button");
sourceCode.textContent = "Source Code";
//Add image to source code button
const sourceCodeImage = document.createElement("img");
sourceCodeImage.setAttribute("src", "#");
sourceCodeImage.setAttribute("class", "button-image");
sourceCode.appendChild(sourceCodeImage);
modalButtons.appendChild(sourceCode);

modal.appendChild(modalButtons);

modal.classList.remove("hidden");

//Buttons
const openModalBtn = document.querySelector(".btn-open");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.querySelector(".btn-close");
closeModalBtn.addEventListener("click", closeModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

}
