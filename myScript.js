const openNav = function openNav() {
  document.getElementById('mySidenav').style.width = '100vw';
  document.getElementById('main').style.marginLeft = '250px';
}

const closeNav = function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}
