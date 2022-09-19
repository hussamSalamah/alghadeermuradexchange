$(document).ready(function(){
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false
		},

		slidesPerView: 1,
		spaceBetween: 10,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	
});

function displayEn(){
	$('html').attr('dir', 'ltr');
	$('.ar').hide();
	$('.en').show();
}


function displayAr(){
	$('html').attr('dir', 'rtl');
	$('.en').hide();
	$('.ar').show();
}
