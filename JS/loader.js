window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	loader.classList.add('loader-hidden');

	loader.addEventListener('transitionend', () => {
		document.body.removeChild('loader');
	});
});

// Open navigation menu sidebar
function openNav() {
	document.getElementById('mobile-nav').style.width = '250px';
	document.body.style.overflow = 'hidden';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById('mobile-nav').style.width = '0';
	document.body.style.overflow = 'scroll';
}
