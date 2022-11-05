const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');

if (selectHeader) {
	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	});
}

if (selectItem) {
	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	});
}

function selectToggle() {
	this.parentElement.classList.toggle('_active');
}

function selectChoose() {
	let text = this.innerText,
		select = this.closest('.select'),
		currentText = select.querySelector('.select__current');
	currentText.innerText = text;
	select.classList.remove('_active');
}

