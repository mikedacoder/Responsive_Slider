# Responsive_Slider
View at http://mikedryburgh.com/responsive_slider/

Requires JQuery.

This slider uses a modal window placed in front of the existing window. An element with an ID of "slider" will trigger it when clicked. The images for the slider are all placed in an unordered list with the class of "slideshow" on the html document.

Example of html:
<button id="slider" class="btn">Start Slideshow</button>	
	
		<div class="slideshow">
			<ul>
				<li><img src="path/image.jpeg"></li>
				<li><img src="path/image.png"></li>
				<li><img src="path/image.gif"></li>
			</ul>
		</div>
		
When activated, the slider sizes all of the images to fit the size of window that is currently in use.