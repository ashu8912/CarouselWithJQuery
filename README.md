# CarouselWithJQuery
using jquery to design a carousel
include file carousel.js in your scripts also
include css file carousel.css in your link tags
Steps
1.Use class =>carousel-container to wrap your carousel
2.the first child of carousel-container is the left-arrow sign which when clicked takes you to the previous slide
wrap it in a div and give id "prev" put your left arrow img inside this "prev" id div 
3.the next child div of carousel-container will be having class 'carousel' the carousel class div will enclose a div with
class 'slide' put your image tag("first slide") in this 'slide' class div. The secondChild of class 'slide' is 'slide-copy'
this div will contain text stuffs if you want any on your slides
4.make copies of 'slide' div to make multiple slides 
5.As the 'carousel' classed div ends the third child of carousel-container is the next arrow with a id 'next' put your right arrow image
inside this 'next' id div


code-snippet for above is ------
<div class="carousel-container">
<div id="prev">
<img src=""><!-- this is where you place your left arrow image or a svg-->
</div>
<div class="carousel">
<div class="slide">
<img src=""><!--put your first slide image here --> 
<div class="slide-copy">
<!-- In this section you can put text stuffs if you want any on your slides -->
</div>
<div class="slide">
<img src=""><!--put your second slide image here --> 
<div class="slide-copy">
<!-- In this section you can put text stuffs if you want any on your slides -->
</div>
</div>
<div id="next">
<img src=""><!-- this is where you place your right arrow image or a svg-->
</div>
</div>
