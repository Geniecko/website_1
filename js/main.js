$(document).ready(function(){
	$('.slides').slick({
		autoplay: true,
		autoplaySpeed: 5000,
	});
	
	$('.gallery-area').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
	$('.gallery-image-link').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	
	$('a').smoothScroll(
		{
			offset:0,
			speed: 700,
			afterScroll: function() {
				$(this).closest('.menu-links').find('a').removeClass('active');
				$(this).addClass('active');
			}
		});
	
});
