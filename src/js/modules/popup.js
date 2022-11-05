const popup = document.querySelector('.popup');
const formBody = document.querySelector('.body-form');

if (popup && formBody) {
	let formInput = formBody.querySelectorAll('.body-form__inp');
	let selectCurrent = document.querySelector('.select__current');
	let showBtn = formBody.querySelector('.body-form__btn');
	let closeBtn = popup.querySelector('.popup__close');

	showBtn.addEventListener('click', event => {
		popup.classList.add('_active');
		
		for (let elem of formInput) {
			elem.value = '';
		}

		event.preventDefault();
	})

	closeBtn.addEventListener('click', event => {
		popup.classList.remove('_active');
		
		selectCurrent.innerHTML = 'Оберіть місто зі списку';

		event.preventDefault()
	})
}

