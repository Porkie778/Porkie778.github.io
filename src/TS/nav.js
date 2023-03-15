const m_nav = document.getElementById('mobile-nav');
const openBtn = document.getElementById('openBtn');

function openNav() {
	m_nav.style.width = '100vw';
	openBtn.style.display = 'none';
	document.body.style.overflow = 'hidden';
	// document.getElementById('main').style.filter = 'blur(4px)';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	m_nav.style.width = '0';
	document.body.style.overflow = 'scroll';
	openBtn.style.display = 'block';
	// document.getElementById('main').style.filter = 'unset';
}

document.getElementById('openBtn').addEventListener('click', openNav);
document.getElementById('closeBtn').addEventListener('click', closeNav);
