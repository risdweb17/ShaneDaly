$(document).ready(function() {
		// Init ScrollMagic
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("div.project");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
		//$('.musso').click(function(){
    //$(this).toggleClass('musso-move');
	//});
 $(window).scroll(function () {
        $('.musso').toggleClass("musso-move", ($(window).scrollTop() > 2750));
     });
 $(window).scroll(function () {
        $('.marinetti2').toggleClass("marinetti-move", ($(window).scrollTop() > 2750));
     });
 new ScrollMagic.Scene({
 				triggerElement: "#sect05", offset: -400,
 				triggerHook:.5
 			})
					.setClassToggle("#fasces", "inactive") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({
 				triggerElement: "#sect05", offset: -400,
 				triggerHook:.5
 			})
					.setClassToggle("#fasces_broken", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

});
