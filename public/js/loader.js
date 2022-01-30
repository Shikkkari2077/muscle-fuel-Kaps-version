// JavaScript Document
var banner_main_ht,howitwork_main_ht,competition_main_ht,total_sec_ht;
$(window).ready(function(){	
	$('body').jpreLoader({
		splashID:"#jSplash",
		loaderVPos:'50%',
		autoClose:true,
		closeBtnText:"Let's Begin!",
		splashFunction:function(){ 
		}
	}, function() {//callback function
		$('header,section,.innerpages,footer,.copyrights').animate({'opacity':1});		
		$('.cup-hand-main').addClass('active');
		if($(window).width() < 781){
			$('.muscle-fuel,.language-div,.subscribe-div,.wsmenucontainer').removeClass('wow');
			$('.muscle-fuel').removeClass('fadeInLeft');
			$('.language-div,.subscribe-div,.wsmenucontainer').removeClass('fadeInRight');
			$('.muscle-fuel,.language-div,.subscribe-div,.wsmenucontainer').removeClass('animated');
			$('.muscle-fuel,.language-div,.subscribe-div,.wsmenucontainer').removeAttr('style');		
		}else{
			setTimeout(function(){
				$('.muscle-fuel,.language-div,.subscribe-div,.wsmenucontainer').addClass('animated');
				$('.muscle-fuel,.language-div,.subscribe-div,.wsmenucontainer').css({'visibility':'visible'});
				$('.language-div,.subscribe-div,.wsmenucontainer').css({'animation-name':'fadeInRight'});
				$('.muscle-fuel').css({'animation-name':'fadeInLeft'});
			},100);
		}
		//wow.init();
		var swiperSlideshow = new Swiper('.slideshow-container',{
			slidesPerView:1,
			effect:'fade',
			speed:700,
			loop:true,
			pagination:{
				el:'.slideshow-pagination',
				clickable:true,
			  },
			autoplay:{
			delay:5000,
			},
			navigation: {
			nextEl: '.slideshow-button-next',
			prevEl: '.slideshow-button-prev',
			},
		});
		addRemoveStyle();
		setTimeout(function(){
			fullpage();
		},300);	
	});
	
});