export function popUp(popupId) {
	const popUp = document.getElementById(popupId);
	const bodyLock = document.getElementById('body');
	const popupCloseIcon = popUp.querySelector('.close-popup');
	const popupBtn = popUp.querySelector('.popup__button');
	const popupLoading = popUp.querySelector('.popup__loading');
	const filePreview = popUp.querySelector('.preview-file') || false;
	const inputs = popUp.querySelectorAll('input');
	popUp.classList.add('open');
	bodyLock.classList.add('lock');

	popupCloseIcon.addEventListener('click', function (e) {
		popupClose(popUp);
		e.preventDefault();
	});

	popupBtn.addEventListener('click', function () {
		popupClose(popUp);
	});

	function popupClose(popupActive) {
		popupActive.classList.remove('open');
		bodyLock.classList.remove("lock");
		popUp.classList.remove('sent');
		inputs.forEach(input => {
			if (!input.value) {
				input.previousElementSibling.classList.remove('error');
				input.classList.remove('error');
				input.nextElementSibling.classList.remove('error');
				input.nextElementSibling.innerHTML = '';
			}
		});
		if (filePreview) {
			filePreview.innerHTML = '';
		}
	}

	popUp.addEventListener('mousedown', function (e) {
		if (!e.target.closest('.popup__body') && !popupLoading.classList.contains('active')) {
			popupClose(popUp);
		}
	});
};
