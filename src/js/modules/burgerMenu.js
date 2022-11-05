const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__list');

iconBurger.addEventListener('click', event => {
	iconBurger.classList.toggle('_active');
	menuBurger.classList.toggle('_active');
	document.body.classList.toggle('_lock');
})