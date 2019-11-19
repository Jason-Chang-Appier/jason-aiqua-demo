// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () { };
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
; (function ($) {
	'use strict';
	var toggles = $('.js-active');
	var toggleHandler = function (toggle) {
		toggle.on('click', function (e) {
			e.preventDefault();
			$(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
		});
	}

	toggles.each(function (i, el) {
		toggleHandler.call($(el));
	});
}(jQuery));

; (function ($) {
	'use strict';
	var settings = {
		'max-width-tablet': 879,
		'max-width-mobile': 767,
		'url-pc': '',
		'url-table': '',
		'url-mobile': ''
	},
		methods = {
			init: function (options) {
				settings = $.extend({}, settings, options);
				$(this).each(function (i, el) {
					if (settings['url-pc'] != '') $(el).data('url-pc', settings['url-pc']);
					if (settings['url-table'] != '') $(el).data('url-table', settings['url-table']);
					if (settings['url-mobile'] != '') $(el).data('url-mobile', settings['url-mobile']);
					$(window).on('resize', function (e) {
						clearTimeout($.data(el, 'resizeTimerRWD'));
						$.data(el, 'resizeTimerRWD', setTimeout(function () {
							methods.update.apply(el);
						}, 50));
					});
				});
				$(window).trigger('resize');
				return this;
			},
			update: function () {
				var $container = $(this);
				var pc = $container.data('url-pc');
				var tablet = $container.data('url-tablet');
				var mobile = $container.data('url-mobile');
				if (Modernizr.mq('screen and (max-width: ' + settings['max-width-mobile'] + 'px)')) {
					$container.css({
						'background-image': 'url(' + mobile + ')',
						'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + mobile + '", sizingMethod="scale")'
					});
				} else if (Modernizr.mq('screen and (max-width: ' + settings['max-width-tablet'] + 'px)')) {
					$container.css({
						'background-image': 'url(' + tablet + ')',
						'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + tablet + '", sizingMethod="scale")'
					});
				} else {
					$container.css({
						'background-image': 'url(' + pc + ')',
						'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + pc + '", sizingMethod="scale")'
					});
				}
				return this;
			}
		};

	$.fn.aplusRwdBg = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.aplusRwdBg');
		}
	};
})(jQuery);

; (function ($) {
	'use strict';
	var settings = {
		'max-width-tablet': 879,
		'max-width-mobile': 767,
		'url-pc': '',
		'url-table': '',
		'url-mobile': ''
	},
		methods = {
			init: function (options) {
				settings = $.extend({}, settings, options);
				$(this).each(function (i, el) {
					if (settings['url-pc'] != '') $(el).data('url-pc', settings['url-pc']);
					if (settings['url-table'] != '') $(el).data('url-table', settings['url-table']);
					if (settings['url-mobile'] != '') $(el).data('url-mobile', settings['url-mobile']);
					$(window).on('resize', function (e) {
						clearTimeout($.data(el, 'resizeTimerRWD'));
						$.data(el, 'resizeTimerRWD', setTimeout(function () {
							methods.update.apply(el);
						}, 50));
					});
				});
				$(window).trigger('resize');
				return this;
			},
			update: function () {
				var $image = $(this);
				var pc = $image.data('url-pc');
				var tablet = $image.data('url-tablet');
				var mobile = $image.data('url-mobile');
				if (Modernizr.mq('screen and (max-width: ' + settings['max-width-mobile'] + 'px)')) {
					$image.attr('src', mobile);
				} else if (Modernizr.mq('screen and (max-width: ' + settings['max-width-tablet'] + 'px)')) {
					$image.attr('src', tablet);
				} else {
					$image.attr('src', pc);
				}
				return this;
			}
		};

	$.fn.aplusRwdImg = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.aplusRwdImg');
		}
	};
})(jQuery);

; (function ($) {
	'use strict';
	var settings = {
		'max-width-tablet': 879,
		'max-width-mobile': 767,
		'url-pc': '',
		'url-table': '',
		'url-mobile': ''
	},
		methods = {
			init: function (options) {
				settings = $.extend({}, settings, options);
				$(this).each(function (i, el) {
					//if (settings['url-pc'] != '') $(el).data('url-pc', settings['url-pc']);
					//if (settings['url-table'] != '') $(el).data('url-table', settings['url-table']);
					//if (settings['url-mobile'] != '') $(el).data('url-mobile', settings['url-mobile']);
					$(window).on('resize', function (e) {
						clearTimeout($.data(el, 'resizeTimerRWD'));
						$.data(el, 'resizeTimerRWD', setTimeout(function () {
							methods.update.apply(el);
						}, 50));
					});
				});
				$(window).trigger('resize');
				return this;
			},
			update: function () {
				var windowH = $(window).height()
				var headerH = $('header').outerHeight(true);

				var $kv = $(this);
				$kv.height(windowH - headerH);
				//var pc = $image.data('url-pc');
				//var tablet = $image.data('url-tablet');
				//var mobile = $image.data('url-mobile');
				//if (Modernizr.mq('screen and (max-width: ' + settings['max-width-mobile'] + 'px)')) {
				//	$image.attr('src', mobile);
				//} else if (Modernizr.mq('screen and (max-width: ' + settings['max-width-tablet'] + 'px)')) {
				//	$image.attr('src', tablet);
				//} else {
				//	$image.attr('src', pc);
				//}
				return this;
			}
		};

	$.fn.aplusRwdKv = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + methodOrOptions + ' does not exist on jQuery.aplusRwdKv');
		}
	}.call($('.kv'));
})(jQuery);

;/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
var Materialize = {};
var getTime = (Date.now || function () {
	return new Date().getTime();
});
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3;
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158; var p = 0; var a = c;
			if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) { a = c; var s = p / 4; }
			else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		}
	});

Materialize.escapeHash = function (hash) {
	return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
};

Materialize.throttle = function (func, wait, options) {
	var context, args, result;
	var timeout = null;
	var previous = 0;
	options || (options = {});
	var later = function () {
		previous = options.leading === false ? 0 : getTime();
		timeout = null;
		result = func.apply(context, args);
		context = args = null;
	};
	return function () {
		var now = getTime();
		if (!previous && options.leading === false) previous = now;
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0) {
			clearTimeout(timeout);
			timeout = null;
			previous = now;
			result = func.apply(context, args);
			context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
};

(function ($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function (i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});
		return hits;
	}

	/**
	 * Called when the user scrolls the window
	 */
	function onScroll(scrollOffset) {
		// unique tick id
		++ticks;
		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top + offset.top + scrollOffset || 200, right + offset.right, bottom + offset.bottom, left + offset.left);
		$.each(intersections, function (i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function (i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}


	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function (selector, options) {
		var defaults = {
			throttle: 100,
			scrollOffset: 200 // offset - 200 allows elements near bottom of page to scroll
		};
		options = $.extend(defaults, options);

		var visible = [];
		selector = $(selector);
		selector.each(function (i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
			$('a[href="#' + $(element).attr('id') + '"]').click(function (e) {
				e.preventDefault();
				var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
				$('html, body').animate({ scrollTop: offset - options.scrollOffset }, { duration: 400, queue: false, easing: 'easeOutCubic' });
			});
		});

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = Materialize.throttle(function () {
			onScroll(options.scrollOffset);
		}, options.throttle || 100);
		var readyScroll = function () {
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function () {
			visible = $.grep(visible, function (value) {
				return value.height() != 0;
			});
			console.log(visible)
			var $this = $(this);

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
		});
		selector.on('scrollSpy:exit', function () {
			visible = $.grep(visible, function (value) {
				return value.height() != 0;
			});

			if (visible[0]) {
				$('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
				var $this = $(this);
				visible = $.grep(visible, function (value) {
					return value.attr('id') != $this.attr('id');
				});
				if (visible[0]) { // Check if empty
					$('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
				}
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function (options) {
		$.winSizeSpy = function () { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function (options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);