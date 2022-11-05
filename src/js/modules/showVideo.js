// Company video

const videoBtn = document.querySelector('.video__play');
const videoContainer = document.querySelector('.video__content');

if (videoBtn) {
	videoBtn.addEventListener('click', event => {
		videoContainer.classList.add('_active');

		event.preventDefault();
	})
}

// Guide videos
const guideVideoPoster = document.querySelectorAll('.item-guide__poster');

if (guideVideoPoster) {
	for (let elem of guideVideoPoster) {
		elem.querySelector('.item-guide__play').addEventListener('click', e => {
			elem.classList.add('_active');

			e.preventDefault();
		})
	}
}