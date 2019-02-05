
$(document).ready(function() {
	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
		{
			src: 'https://placekitten.com/600/400',
			w: 600,
			h: 400
		},
		{
			src: 'https://placekitten.com/1200/900',
			w: 1200,
			h: 900
		}
	];

	// define options (if needed)
	var options = {
		// optionName: 'option value'
		// for example:
		index: 0 // start at first slide
	};


	$('#showpic').click(function() {
		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	
		gallery.init();
	});
});
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }