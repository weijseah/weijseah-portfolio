jQuery(document).ready(function($){
	
	// Smooth transition for navbar when scrolling down/back to header
	$(function () {
		$(document).scroll(function () {
			var $nav = $(".navbar");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});	
		

});
  