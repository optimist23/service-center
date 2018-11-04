$(document).ready(function() {


	$('.dealers-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	//$('.exp-slider').slick({ asNavFor: '.exp-slider' });
	
	$('.experience-slider-box').slick({
		fade: true,
		nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
		prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
		dots: true,
		dotsClass: 'dots',
		asNavFor: '.experience-slider-nav, .problem-list'
	});
	$('.experience-slider-nav').slick({
		slidesToShow: 4,
		vertical: true,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.experience-slider-box, .problem-list'
	});
	$('.problem-list').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.experience-slider-nav, .experience-slider-nav'
	});


	$('.dealership-clients__slider').slick({
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					nextArrow: '<div class="arrow arrow-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>',
					prevArrow: '<div class="arrow arrow-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>',
					slidesToShow: 1
				}
			}
		]
	});
	
}); /* end jquery */