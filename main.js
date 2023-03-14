window.addEventListener('load', () => {
	document.getElementsByClassName('loader')[0].classList.add('loader-hidden');
	document.getElementsByClassName('loader')[0].addEventListener('transitionend', () => {
		document.body.removeChild('loader');
	});
});

// Open navigation menu sidebar
function openNav() {
	document.getElementById('mobile-nav').style.width = '100vw';
	document.getElementById('openBtn').style.display = 'none';
	document.body.style.overflow = 'hidden';
	// document.getElementById('main').style.filter = 'blur(4px)';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById('mobile-nav').style.width = '0';
	document.body.style.overflow = 'scroll';
	document.getElementById('openBtn').style.display = 'block';
	// document.getElementById('main').style.filter = 'unset';
}

document.getElementById('openBtn').addEventListener('click', () => {
	openNav();
});

document.getElementById('closeBtn').addEventListener('click', () => {
	closeNav();
});
