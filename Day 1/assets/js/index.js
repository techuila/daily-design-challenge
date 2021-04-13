$(document).ready(() => {
	function main() {
		// Display header
		if (['', '#home'].includes(window.location.hash)) {
			$('header').load('/components/HomeHeader.html');
		}

		// Listen for window resize
		resizeFn();
		$(window).resize(resizeFn);
		// $('main').on('scroll', scrollFn);

		$('#bottom-navigation .link').on('click', function () {
			// Remove previous active link
			$('#bottom-navigation .link.active').removeClass('active');

			// Set clicked link to active
			$(this).addClass('active');
		});
	}

	main();
});

function resizeFn() {
	const main_el = $('main');
	const nav_el = $('#bottom-navigation');
	const target_class = 'scrollable-main';
	const hasScrollBar =
		main_el.get(0).scrollHeight >
		$('#app').get(0).scrollHeight -
			($('header').get(0).scrollHeight + $('footer').get(0).scrollHeight);

	if (hasScrollBar && !nav_el.hasClass(target_class)) {
		nav_el.toggleClass(target_class);
	} else if (!hasScrollBar && nav_el.hasClass(target_class)) {
		nav_el.toggleClass(target_class);
	}
}

function scrollFn() {
	const nav_el = $('#bottom-navigation');
	const target_class = 'scrollable-main';

	if (
		$(this).scrollTop() ===
		$(this).get(0).scrollHeight - $(this).get(0).offsetHeight
	) {
		nav_el.toggleClass(target_class);
	} else if (!nav_el.hasClass(target_class)) {
		nav_el.toggleClass(target_class);
	}
}
