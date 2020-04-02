const about = document.querySelector('#button1');
$('about').click(function() {
	$('html,body').animate(
		{
			scrollTop: $('#about').offset().top
		},
		'slow'
	);
});
