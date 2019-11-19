$(function () {
	$('.js-rwd-bg').aplusRwdBg();

	$('.js-rwd-image').aplusRwdImg();

	$('.nav__burger').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('navOpen');
	});

	$('.nav-mask').on('click', function () {
		$('body').removeClass('navOpen');
	});

	$('.js-fancybox').fancybox();

	// Go to top
	$('#btnGoTop').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	var sticky = function () {
		if ($(window).scrollTop() > 40) {
			$('.sticky').fadeIn('fast');
		} else {
			$('.sticky').fadeOut('fast');
		}
	};
	

	$(window).on('scroll', function (e) {
		e.preventDefault();
		sticky.call();
	}).trigger('scroll');

	$('[data-id="socialMore"]').click(function (e) {
		e.stopPropagation();
		$(this).next().toggleClass('hide');
		$(document).on('click', function () {
			$('[data-id="socialMore"]').next().addClass('hide');
			$(this).off('click');
		});
	});

	$('.kv__socialMore').click(function(){
		$('.shareBox__list').toggleClass('on');
	});


	$('[data-id="scrollspy"]').scrollSpy({ scrollOffset: 50 });
	$('.nav__list a').click(function (e) {
		e.preventDefault();
		$('body').removeClass('navOpen');
	});
});