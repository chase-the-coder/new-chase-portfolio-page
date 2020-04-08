const initUpdateNavbarOnScroll = () => {
	const navbar = document.querySelector('.navbar-lewagon');
	const toggler = document.querySelector('.navbar-toggler');
	if (navbar) {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= window.innerHeight) {
				navbar.classList.add('navbar-lewagon-white');
				toggler.classList.add('navbar-toggler-white');
			} else {
				navbar.classList.remove('navbar-lewagon-white');
				toggler.classList.remove('navbar-toggler-white');
			}
		});
	}
};
export { initUpdateNavbarOnScroll };
