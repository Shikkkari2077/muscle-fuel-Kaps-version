function fullpage(){
	$('#fullpage').fullpage({
			menu: '#menu',
			v2compatible: true,
			anchors: ['Homepage', '/Packages', 'Growing', 'Features', 'Testimonials'],
			sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['Welcome', '/Packages', 'Growing', 'Features', 'Testimonials'],
			responsiveWidth: 300,
			verticalCentered: true,
			scrollingSpeed: 1000,
			scrollOverflow: true,
			sectionSelector: '.section',
			/*licenseKey:'',*/ normalScrollElements: '.fancybox-inner,.fancybox-content,.fancybox-stage',
			afterResponsive: function (isResponsive) {},
			onLeave: function (index, nextIndex, direction) {
				console.log('nextIndex: ' + nextIndex);
				if (nextIndex === 1) {
					/*$('.menu-link').removeClass('black');*/
					$('header').removeClass('small-header');
					/*$('.wsmenu-list li a').removeClass('nav-active');
					$('.wsmenu-list li.main-link:first-child > a').addClass('nav-active');*/
					//$('.banner-page').addClass('selected');
				}
				else{
					$('header').addClass('small-header');
					//$('.wsmenu-list li a').removeClass('nav-active');
					/*setTimeout(function () {
						$('.banner-page').removeClass('selected');
					}, 1000);*/
				}
				if (nextIndex === 2) {
					/*$('.menu-link').addClass('black');
					$('.wsmenu-list li.main-link:nth-child(2) > a').addClass('nav-active');*/
				}
				else if (nextIndex === 3) {
					srtartCounting();
					/*$('.menu-link').removeClass('black');
					$('.wsmenu-list li.main-link:nth-child(3) > a').addClass('nav-active');*/
				}
				else if (nextIndex === 4) {
					/*$('.menu-link').addClass('black');
					$('.wsmenu-list li.main-link:nth-child(4) > a').addClass('nav-active');*/
				} 
				else if (nextIndex === 5) {
					/*$('.menu-link').addClass('black');
					$('.wsmenu-list li.main-link:nth-child(5) > a').addClass('nav-active');*/
				}
				else if (nextIndex === 6) {
					/*$('.menu-link').addClass('black');
					$('.wsmenu-list li.main-link:nth-child(6) > a').addClass('nav-active');*/
				}
				else if (nextIndex === 7) {
					/*$('.menu-link').addClass('black');
					$('.wsmenu-list li.main-link:nth-child(7) a').addClass('nav-active');*/
				}
				else{
					//$('.wsmenu-list li a').removeClass('nav-active');
				}
			}
		});
}	
$(document).ready(function () {
	
});