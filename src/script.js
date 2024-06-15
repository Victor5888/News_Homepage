const menu = document.getElementById('menu');
const closeId = document.getElementById('close');
const menuId = document.getElementById('menu_container');
const bgchange = document.getElementById('dropbg');

function lowerBgOpacity() {
  bgchange.classList.add('bodychange');
}

function displayMenu() {
  lowerBgOpacity();
  menuId.classList.add('clicked');
}

function closeMenu() {
  menuId.classList.remove('clicked');
  bgchange.classList.remove('bodychange');
}

menu.addEventListener('click', displayMenu);
closeId.addEventListener('click', closeMenu);
autoRemove();
