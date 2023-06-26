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