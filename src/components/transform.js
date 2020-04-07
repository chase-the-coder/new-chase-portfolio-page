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
export { transform };
