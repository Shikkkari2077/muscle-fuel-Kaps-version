var league_title,event_url,words,data_id=1,this_evt,gridlist_val,flightHotel="FlightOnly",myTrips="scheduled",account_evt;
$(document).ready(function(){
	"use strict"; 
	addRemoveStyle();
	setInterval(function() {
		var pipe_one = Math.round($('.pipe-one').height() / $('.fider-main').height() * 100 );
		$('.pipe-one .fider-text').find('strong').text(pipe_one+'%');

		var pipe_two = Math.round($('.pipe-two').height() / $('.fider-main').height() * 100 );
		$('.pipe-two .fider-text').find('strong').text(pipe_two+'%');
		
		var pipe_three = Math.round($('.pipe-three').height() / $('.fider-main').height() * 100 );
		$('.pipe-three .fider-text').find('strong').text(pipe_three+'%');
	}, 100);
	$('.forgot-link').click(function(){		
		$('.forgot-main').toggleClass('opened-forgot');
		$('.forgot-main-sub').slideToggle('opened-forgot');
	});
	$('.dish-ul input[type="radio"][name="Meal"]').change(function() {
		var meal = $(this).val();
		$('.mealVal').text(meal);
	});
	$('.dish-ul input[type="radio"][name="snacks"]').change(function() {
		var snakcs = $(this).val();
		$('.SnakcsVal').text(snakcs);
	});
	$('.dish-ul input[type="radio"][name="Soup"]').change(function() {
		var soup = $(this).val();
		$('.SoupVal').text(soup);
	});
	$('.my-account').click(function(){		
		account_evt=$(this);
		if(account_evt.hasClass('active')){
			setTimeout(function(){
				$('.my-account-main').removeClass('opened');
				$(account_evt).removeClass('active')
			},500)
			$('.account-submenu').removeClass('show');
		}
		else{
			$('.my-account-main').addClass('opened');
			setTimeout(function(){
				$('.account-submenu').addClass('show');
			},100);
			$(account_evt).addClass('active')
		}
	});
	$('.change-btn').click(function () {
        $(this).parents('.myprofile-main').find('.profiledata').slideUp();
        $(this).parents('.myprofile-main').find('.profileform').slideDown();
    });
    $('.closebutton').click(function () {
        $(this).parents('.myprofile-main').find('.profiledata').slideDown();
        $(this).parents('.myprofile-main').find('.profileform').slideUp();
    });
	$('.faq-link').click(function(){
		if($(this).hasClass('active')){
			$(this).next('.faq-dtl').slideUp();
			$(this).removeClass('active');
		}
		else{
			$('.faq-dtl').slideUp();
			$('.faq-link').removeClass('active');
			$(this).next('.faq-dtl').slideDown();
			$(this).addClass('active');
			
			/*$(this).next('.faq-dtl').slideToggle();
			$(this).toggleClass('active');*/
		}
	})
});
 
function srtartCounting(){
	$('.counting').each(function(){
	  var $this = $(this),
		  countTo = $this.attr('data-count');  
	  $({ countNum: $this.text()}).animate({
		countNum: countTo
	  },
	  {
		duration:3000,
		easing:'linear',
		step: function() {
		  $this.text(Math.floor(this.countNum));
		},
		complete: function() {
		  $this.text(this.countNum);
		  //alert('finished');
		}
	  });
	});
}
$(window).scroll(function(){
	 "use strict";
	if ($(this).scrollTop() > 50){
		$('header').addClass('small-header');
	} else {		   
		$('header').removeClass('small-header');
	}
});
var win_width,win_height,header_ht,check_ava,total,footer;
function addRemoveStyle(){
	"use strict";
	win_width=$(window).width();
	win_height=$(window).height();
	/*if(win_width > 575){
		$('.banner-main .slideshow-img').css({'height':win_height});
		
	}
	else{
		$('.banner-main .slideshow-img').css({'height':'auto'});
	}*/
} 
$(document).mouseup(function(e)
{
	"use strict";
	var account1 = $('.account-main');
	var account2 = $('.account-link');
	if (!account1.is(e.target) && account1.has(e.target).length === 0) 
	{
		if (!account2.is(e.target) && account2.has(e.target).length === 0) 
		{
			$('.account-main').find('.account-sub ul').addClass('hide');
			setTimeout(function(){
				$('.account-main').find('.account-sub').removeClass('opened');
				$('.account-main').find('.account-sub ul').removeClass('show');
				$('.account-main').find('.account-sub ul').removeClass('hide');
			},300);
			$('.account-link').removeClass('active')
		}
	}
	var forgot1 = $('.forgot-main');
	var forgot2 = $('.forgot-link');
	if (!forgot1.is(e.target) && forgot1.has(e.target).length === 0) 
	{
		if (!forgot2.is(e.target) && forgot2.has(e.target).length === 0) 
		{
			$('.forgot-main').removeClass('opened-forgot');
			$('.forgot-main-sub').slideUp();
		}
	}
	var account1 = $('.account-submenu');
	var account2 = $('.my-account');
	if (!account1.is(e.target) && account1.has(e.target).length === 0) 
	{
		if (!account2.is(e.target) && account2.has(e.target).length === 0) 
		{
			setTimeout(function(){
				$('.my-account-main').removeClass('opened');
				$(account_evt).removeClass('active')
			},500)
			$('.account-submenu').removeClass('show');
		}
	}
});  
function goToByScroll(ids){
	"use strict";
	$('html,body').animate({scrollTop: $("#"+ids).offset().top-75},1000);
}
 $(window).on('load', function () {
	"use strict";	
	addRemoveStyle();
});
$(window).resize(function() {
	"use strict";
	setTimeout(function(){
		addRemoveStyle();
	},100)
	
});