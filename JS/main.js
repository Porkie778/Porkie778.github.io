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

function navDisplay() {
	let desktop = document.getElementById('desktop-nav');
	let mobile = document.getElementById('mobile-nav');
	if(window.innerWidth > 500){
		desktop.style.display = "flex";
		mobile.style.display = "none";
	}
	else {
		window.alert("Hello");
	}
}

window.addEventListener("resize",navDisplay(),false);
