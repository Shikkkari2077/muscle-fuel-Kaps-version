$(function() {
	"use strict";
	$( ".calendar" ).datepicker({showOtherMonths:true,
		numberOfMonths: 1,changeMonth: true,
		changeYear: true,
		defaultDate: "dateToday"});
	$( ".datepicker" ).datepicker({
		showOtherMonths:false,
		numberOfMonths: 1,
		selectOtherMonths: true,
		dateFormat:"dd / mm / yy",
		changeMonth: true,
		changeYear: true,
		yearRange: "-50:+0" ,
		defaultDate: "dateToday",
		minDate: "dateToday"
	});
	$( ".birthDate" ).datepicker({	 
		showOtherMonths:true,
		numberOfMonths: 1,
		selectOtherMonths: true,
		dateFormat:"dd / mm / yy",
		changeMonth: true,
		changeYear: true,
		yearRange: "-50:+0",
		maxDate: "+0m +0w"
	});
});
/*$(function() {
  $( ".calendar" ).datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
	
	$(document).on('click', '.date-picker .input', function(e){
		var $me = $(this),
				$parent = $me.parents('.date-picker');
		$parent.toggleClass('open');
	});
	
	
	$(".calendar").on("change",function(){
		var $me = $(this),
				$selected = $me.val(),
				$parent = $me.parents('.date-picker');
		$parent.find('.result').children('span').html($selected);
	});
});*/

