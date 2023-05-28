$(document).ready(function() {
	$("#slider").bxSlider({
		auto: true,
		minSlides: 1,         // Display one slide at a time
		maxSlides: 1,         // Display one slide at a time
		slideWidth: 250,
		slideMargin: 10,
		randomStart: true,    // Randomly select the first image
		moveSlides: 1,        // Move one slide at a time
		pause: 3000,          // Set the time between automatic transitions to 3 seconds
		pagerCustom: '#pager', // Display pager in the '#pager' paragraph
		onSliderLoad: function(currentIndex) {
			var totalSlides = 5;
			$('#pager').text((currentIndex + 1) + '/' + totalSlides);
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex) {
			var totalSlides = 5;
			$('#pager').text((newIndex + 1) + '/' + totalSlides);
		}
	});
});
