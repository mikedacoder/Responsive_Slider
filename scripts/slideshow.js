$(document).ready(function ($) {
	
	var slideshow = $(".slideshow");
	
	slideshow.hide();
	
	var slideshowButton = $('#slider');
	var slideshowUL = $(".slideshow ul");
	var slideshowLI = $(".slideshow ul li");
	var slideshowImage = $(".slideshow ul li img");		
	
	slideshowButton.click(function(){		
		
		//Get values of the window height and width.
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		
		/*Finds all img type tags that are children
	  of the element object passed in, passes them
	  into the 'images' array, modifies them to
	  have an id of 'image#' and then passes them 
	  to a new array titled 'slides' which is
	  returned.*/
		function getImages(element) {	
			
			var slides = [];
			
			images = element.find('img');

			for (var i = 0; i < images.length; i++) {			
				var image = images[i];		
				image.id = "image" + (i + 1);														
				slides.push(image);		
			}		
			return slides;
		}

		var images = getImages(slideshowLI);
		var imageCount = images.length;		

		var slideshowWidth = imageCount * windowWidth;
		
		// Place the last image before the first image.
		$(".slideshow ul li:last-child").prependTo(slideshowUL);
		
		//Setup slideshow
		slideshow.show();
		slideshow.css("position", "absolute");
		slideshow.css("top", "0");
		slideshow.css("right", "0");
		slideshow.css("bottom", "0");
		slideshow.css("left", "0");
		slideshow.css("background-color", "rgba(128, 128, 128, 0.7)");
		slideshow.css("z-index", "999");
		slideshow.css("overflow", "scroll");		
		
		slideshowUL.css("position", "relative");
		slideshowUL.css("width", slideshowWidth);
		slideshowUL.css("list-style", "none");
		//slideshowUL.css("left", (windowWidth));
		
		if(windowWidth > windowHeight) {
			slideshowImage.css("height", "100%");
			slideshowImage.css("width", "auto");
			slideshowImage.css("margin", "5% 10% 5% 5%");
		} else {
			slideshowImage.css("height", "auto");
			slideshowImage.css("width", "80%");
			slideshowImage.css("margin", "5% 12.5% 5% 5%");
		}		
		
		slideshowLI.css("position", "relative");
		slideshowLI.css("display", "block");		
		slideshowLI.css("float", "left");
		slideshowLI.css("width", windowWidth);
		slideshowLI.css("height", windowHeight*0.75);		
		
		//Create close button and functionality
		slideshow.append( "<div class='close'>X</div>" );
		var closeButton = $(".close");
		closeButton.css("position", "absolute");
		closeButton.css("top", "0");
		closeButton.css("right", "0");
		closeButton.css("font-family", "Arial, sans-serif");
		closeButton.css("font-size", "35px");
		closeButton.css("color", "rgba(255, 255, 255, 0.7)");		
		closeButton.css("padding", ".75%");
		closeButton.css("cursor", "pointer");
		closeButton.hover(function() {
			$(this).css("background-color", "rgba(255, 0, 0, 0.7)");
		}, function() {
			$(this).css("background-color", "rgba(128, 128, 128, 0)");
		});
		closeButton.click(function() {
			slideshow.hide();
		});
		
		//Create previous button and functionality
		slideshow.prepend( "<div class='previous'><</div>" );
		var previousButton = $(".previous");
		previousButton.css("position", "fixed");
		previousButton.css("top", "40%");
		previousButton.css("left", "0");
		previousButton.css("font-family", "Arial, sans-serif");
		previousButton.css("font-size", "56px");
		previousButton.css("color", "rgba(255, 255, 255, 0.7)");		
		previousButton.css("padding", "0% .75%");
		previousButton.css("cursor", "pointer");
		previousButton.hover(function() {
			$(this).css("background-color", "rgba(47, 79, 79, 0.7)");
		}, function() {
			$(this).css("background-color", "rgba(128, 128, 128, 0)");
		});
		previousButton.click(function() {			
			slideshowUL.animate({
				left: + windowWidth
			}, 500, function(){
					$(".slideshow ul li:last-child").prependTo(slideshowUL);
					slideshowUL.css("left", "");					
				});
		});
		
		
		//Create next button and functionality
		slideshow.append( "<div class='next'>></div>" );
		var nextButton = $(".next");
		nextButton.css("position", "absolute");
		nextButton.css("top", "40%");
		nextButton.css("right", "0");
		nextButton.css("font-family", "Arial, sans-serif");
		nextButton.css("font-size", "56px");
		nextButton.css("color", "rgba(255, 255, 255, 0.7)");		
		nextButton.css("padding", "0% .75%");
		nextButton.css("cursor", "pointer");
		nextButton.hover(function() {
			$(this).css("background-color", "rgba(47, 79, 79, 0.7)");
		}, function() {
			$(this).css("background-color", "rgba(128, 128, 128, 0)");
		});
		nextButton.click(function() {			
			slideshowUL.animate({
				left: - windowWidth				
			}, 500, function(){
				$(".slideshow ul li:first-child").appendTo(slideshowUL);
				slideshowUL.css("left", "");				
			});
		});			
		
	});
	
});