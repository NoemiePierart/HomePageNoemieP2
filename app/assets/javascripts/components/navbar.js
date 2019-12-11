/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const classToggle =() => {
  console.log("Coucou");
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

export { classToggle };
