$(window).load(function(){



	// on hover effects
	$('.c_overlay').mouseover(function(){
		$(this).siblings().css("-webkit-transform","scale(1.1)");
		$(this).siblings().css("transform","scale(1.1)");
		$(this).siblings().css("-moz-transform","scale(1.1)");
		$(this).siblings().css("-o-transform","scale(1.1)");
	});

	$('.c_overlay').mouseout(function(){
		$(this).siblings().css("-webkit-transform","scale(1)");
		$(this).siblings().css("transform","scale(1)");
		$(this).siblings().css("-moz-transform","scale(1)");
		$(this).siblings().css("-o-transform","scale(1)");
	});

	//scroller
	$(".nano").nanoScroller();



})