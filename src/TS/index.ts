const m_nav: any = document.getElementById('mobile-nav');
const openBtn: any = document.getElementById('openBtn');

window.addEventListener('load', () => {
	document.getElementsByClassName('loader')[0].classList.add('loader-hidden');
	document.getElementsByClassName('loader')[0].addEventListener('transitionend', () => {
		document.body.removeChild(document.getElementsByClassName('loader')[0]);
	});
});

// Open navigation menu sidebar
export function openNav() {
	m_nav.style.width = '100vw';
	openBtn.style.display = 'none';
	document.body.style.overflow = 'hidden';
	// document.getElementById('main').style.filter = 'blur(4px)';
}

/* Set the width of the side navigation to 0 */
export function closeNav() {
	m_nav.style.width = '0';
	document.body.style.overflow = 'scroll';
	openBtn.style.display = 'block';
	// document.getElementById('main').style.filter = 'unset';
}
