$(document).ready(function(e) {
    var slyderWidth = $('.slyder_item:first').children('img').width();
	var slyderHeight = $('.slyder_item:first').children('img').height();
	var kolvo = $('.slyder_item').length;
	var count = 0;
	$('#slyder, #slyder_content, .slyder_item').css({"width" : slyderWidth + "px", "height" : slyderHeight + "px"});
	$('#slyder_left_button, #slyder_right_button').css({"width" : slyderWidth - slyderWidth / 2 + "px", "height" : slyderHeight + "px"});

	$('.slyder_item').each(function(index, element) {
        $(this).css({"left" : slyderWidth * index + "px"});
    });

	for (i = 0; i < kolvo; i++) {
		$('#slyder_dots').append('<div class="dots_item"></div>');
		};
		
	$('#slyder_dots').children('.dots_item').first().removeClass().addClass('dots_item_active');
	
	$('#slyder_dots').on('click', 'div', function() {
		if ($(this).hasClass('dots_item_active')) {}
		else {
			$('#slyder_dots').children('.dots_item_active').removeClass().addClass('dots_item');
			$('#slyder_dots').children('div').eq($(this).index()).removeClass().addClass('dots_item_active');
			count = 0;
			count = count + slyderWidth * $(this).index();
			$('.slyder_item').each(function(index, element) {
        		$(this).stop().animate({left:slyderWidth * index - count + "px"}, 600);
			});
			};
		});
	
	function rightMoving() {
		count += slyderWidth;
		if (count >= slyderWidth * kolvo) {
			$('#slyder_dots').children('.dots_item_active').removeClass().addClass('dots_item');
			$('#slyder_dots').children('.dots_item').first().removeClass().addClass('dots_item_active');
			$('.slyder_item').each(function(index, element) {
        		$(this).stop().animate({left:slyderWidth * index + "px"}, 600);
			});
			count = 0;
			}
		else {
			$('#slyder_dots').children('.dots_item_active').removeClass().addClass('dots_item').next('.dots_item').removeClass().addClass('dots_item_active');
			$('.slyder_item').each(function(index, element) {
        		$(this).stop().animate({left:slyderWidth * index - count + "px"}, 600);
			});
			};
		};
		
	function leftMoving() {
		count -= slyderWidth;
		if (count < 0) {
			$('#slyder_dots').children('.dots_item_active').removeClass().addClass('dots_item');
			$('#slyder_dots').children('.dots_item').last().removeClass().addClass('dots_item_active');
			count = slyderWidth * kolvo - slyderWidth;
			$('.slyder_item').each(function(index, element) {
        		$(this).stop().animate({left:slyderWidth * index - count + "px"}, 600);
			});
			}
		else {
			$('#slyder_dots').children('.dots_item_active').removeClass().addClass('dots_item').prev('.dots_item').removeClass().addClass('dots_item_active');
			$('.slyder_item').each(function(index, element) {
        		$(this).stop().animate({left:slyderWidth * index - count + "px"}, 600);
			});
			};
		};
	
	$('#slyder_left_button').on('click', leftMoving);
	$('#slyder_right_button').on('click', rightMoving);
	
	var interval = setInterval(rightMoving, 8000);
	$('#slyder').mouseenter(function(){
		clearInterval(interval);
	}); 
	$('#slyder').mouseleave(function(){
		interval = setInterval(rightMoving, 8000);
	});
});