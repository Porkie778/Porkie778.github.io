var m_nav = document.getElementById('mobile-nav');

window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	loader.classList.add('loader-hidden');

	loader.addEventListener('transitionend', () => {
		document.body.removeChild(document.getElementsByClassName('loader')[0]);
	});
});

// Open navigation menu sidebar
function openNav() {
	m_nav.style.width = '250px';
	document.body.style.overflow = 'hidden';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	m_nav.style.width = '0';
	document.body.style.overflow = 'scroll';
}
