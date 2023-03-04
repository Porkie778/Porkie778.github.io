let lastScrollPosition = window.pageYOffset;
let ticking = false;

function scrollHandler() {
	lastScrollPosition = window.pageYOffset;
	if (!ticking) {
		window.requestAnimationFrame(function () {
			scrollPage();
			ticking = false;
		});
	}
	ticking = true;
}

function scrollPage() {
	let currentScrollPosition = window.pageYOffset;
	let scrollHeight = window.innerHeight;
	let scrollDelta = currentScrollPosition - lastScrollPosition;

	// Scroll the height of the viewport
	window.scrollTo({
		top: currentScrollPosition + scrollHeight * Math.sign(scrollDelta),
		behavior: 'smooth',
	});
}

window.addEventListener('scroll', scrollHandler, { passive: true });
