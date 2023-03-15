window.addEventListener('load', () => {
	document.getElementsByClassName('loader')[0].classList.add('loader-hidden');
	document.getElementsByClassName('loader')[0].addEventListener('transitionend', () => {
		document.body.removeChild(document.getElementsByClassName('loader')[0]);
	});
});

export {};
