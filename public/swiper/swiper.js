var swiperpricing = new Swiper('.pricing-container', {
	slidesPerView:3,
	speed:700,
	spaceBetween:15,
	navigation: {
		nextEl: '.pricing-button-next',
		prevEl: '.pricing-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is <= 480px
		300: {
			slidesPerView:1			
		},
		480: {
			slidesPerView:2
		},
		575: {
			slidesPerView:3
		},
		780: {
			slidesPerView:3
		},
		1024: {
			slidesPerView:3
		},
		1200: {
			slidesPerView:3
		}
	},
});
var swiperpackage = new Swiper('.package-container', {
	slidesPerView:3,
	speed:700,
	spaceBetween:15,
	navigation: {
		nextEl: '.package-button-next',
		prevEl: '.package-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is <= 480px
		300: {
			slidesPerView:1			
		},
		480: {
			slidesPerView:2
		},
		575: {
			slidesPerView:3
		},
		780: {
			slidesPerView:3
		},
		1024: {
			slidesPerView:3
		},
		1200: {
			slidesPerView:3
		}
	},
});
var swiperdishes = new Swiper('.dishes-container', {
	slidesPerView:3,
	speed:700,
	spaceBetween:15,
	navigation: {
		nextEl: '.dishes-button-next',
		prevEl: '.dishes-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is <= 480px
		300: {
			slidesPerView:1			
		},
		480: {
			slidesPerView:1
		},
		575: {
			slidesPerView:2
		},
		780: {
			slidesPerView:2
		},
		1024: {
			slidesPerView:3
		},
		1200: {
			slidesPerView:3
		}
	},
});
 var swiper = new Swiper(".mySwiper", {
	 	slidesPerView: 2,
		slidesPerColumn: 2,
        slidesPerGroup:2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },navigation: {
		nextEl: '.week-button-next',
		prevEl: '.week-button-prev',
	},
      });
/*var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		  navigation: {
		nextEl: '.feature-button-next',
		prevEl: '.feature-button-prev',
	},
      });*/
var swiperfeature = new Swiper('.feature-container',{
	slidesPerView:5,
	effect:'slide',
	spaceBetween:10,
	speed:700,
	navigation: {
		nextEl: '.feature-button-next',
		prevEl: '.feature-button-prev',
	},
	breakpoints: { 
		300: {
			slidesPerView:2
		},
		480: {
			slidesPerView:2
		},
		575: {
			slidesPerView:3		
		},
		780: {
			slidesPerView:4
		},
		1024: {
			slidesPerView:5
		}
	},
});
var swiperstories = new Swiper('.stories-container',{
	slidesPerView:5,
	effect:'slide',
	spaceBetween:30,
	speed:700,
	navigation: {
		nextEl: '.stories-button-next',
		prevEl: '.stories-button-prev',
	},
	breakpoints: { 
		300: {
			slidesPerView:2,
			spaceBetween:10
		},
		480: {
			slidesPerView:2,
			spaceBetween:10
		},
		575: {
			slidesPerView:3,
			spaceBetween:10
		},
		780: {
			slidesPerView:4,
			spaceBetween:20
		},
		1024: {
			slidesPerView:4,
			spaceBetween:20
		},
		1280: {
			slidesPerView:4,
			spaceBetween:20
		},
		1300: {
			slidesPerView:5,
			spaceBetween:30
		}
	},
});
var swiperweek = new Swiper('.week-container', {
	slidesPerView:6,
	slidesPerColumn:1,
	speed:1000,
	spaceBetween:10,
	// Responsive breakpoints
	breakpoints: {
		// when window width is <= 320px
		320: {
			slidesPerView:3
		},
		// when window width is <= 480px
		480: {
			slidesPerView:3
		},
		// when window width is <= 640px
		768: {
			slidesPerView:4
		},
		1024: {
			slidesPerView:5
		},
		1280: {
			slidesPerView:6
		},
		1366: {
			slidesPerView:6
		}
	},
	navigation: {
		nextEl: '.week-button-next',
		prevEl: '.week-button-prev',
	},
});
var swipertestimonial = new Swiper('.testimonial-container',{
	slidesPerView:1,
	effect:'slide',
	spaceBetween:0,
	allowTouchMove: false,
	speed:700,
	navigation: {
		nextEl: '.testimonial-button-next',
		prevEl: '.testimonial-button-prev',
	}
});
var swipecalculateCalorier = new Swiper(".calculateCalorie", {
	speed:700,
	allowTouchMove:false,
	draggable: true,
  });
$('.calorie-btn').click(function(){
	swipecalculateCalorier.slideNext();
});
$('.back-btn').click(function(){
	swipecalculateCalorier.slidePrev();
});
