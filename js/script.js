// Фоновые картинки-----------------------------------------------------------------------------
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

// Menu_burger -----------------------------------------------------------------------------

$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// Sliders -----------------------------------------------------------------------------

$(document).ready(function () {
	$('.slider-body').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 4000,

	});
});

// RESET PLACEHOLDER INPUT ON CLICK START
let form_input = document.querySelectorAll('.input');

if (form_input) {
	for (let i = 0; i < form_input.length; i++) {
		form_input[i].addEventListener('click', function () {
			let thisElement = this;

			let savePlaceholder = this.getAttribute('placeholder');

			this.setAttribute('placeholder', ' ');
			document.addEventListener('mouseup', function () {
				thisElement.setAttribute('placeholder', savePlaceholder);
			});
		});
	}
}

