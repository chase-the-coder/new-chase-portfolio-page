const initUpdateNavbarOnScroll = () => {
	const navbar = document.querySelector('.navbar-lewagon');
	const toggler = document.querySelector('.navbar-toggler');
	const navlinks = document.querySelectorAll('.nav-links');
	if (navbar) {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= window.innerHeight) {
				navbar.classList.add('navbar-lewagon-white');
				toggler.classList.add('navbar-toggler-white');
				// toggler.classList.remove('navbar-toggler-transparent');
				for (let navlink of navlinks) {
					navlink.classList.remove('nav-links');
					navlink.classList.add('nav-link');
				}
			} else {
				// navbar.innerHTML = '';
				navbar.classList.remove('navbar-lewagon-white');
				toggler.classList.remove('navbar-toggler-white');
				// toggler.classList.add('navbar-toggler-transparent');
				for (let navlink of navlinks) {
					// navlink.innerHTML = '';
					navlink.classList.add('nav-links');
					navlink.classList.remove('nav-link');
					navlink.classList.remove('active');
				}
			}
		});
	}
};
initUpdateNavbarOnScroll();

const transform = () => {
	const button = document.querySelector('.btn-custom');
	const arrow = document.querySelector('.fa-arrow-right');
	button.addEventListener('mouseenter', () => {
		arrow.style.transition = 'all 0.5s';
		arrow.style.transform = 'rotate(90deg)';
	});
	button.addEventListener('mouseleave', () => {
		arrow.style.transition = 'all 0.5s';
		arrow.style.transform = 'rotate(0deg)';
	});
};

transform();
