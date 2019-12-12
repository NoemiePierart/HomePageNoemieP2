/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


const classToggle =() => {

jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');

		e.preventDefault();
	});
});

export { classToggle };

// const classToggle =() => {

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });

// export { classToggle };
