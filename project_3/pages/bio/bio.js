$(document).ready(function(){
	$('#prof_pic').hide().delay(1000).fadeIn(3000);
	$('.bio_text').hide().delay(500).fadeIn(1500);
	$('background').backgroundBlur({
    imageURL : 'http://images.fineartamerica.com/images-medium-large-5/golden-temple-decoration-sze-yah-chinese-temple-kuala-lumpur-malaysia-david-hill.jpg',
    blurAmount : 10,
    imageClass : 'tinted-bg-blur',
    overlayClass : 'tinted-bg-overlay',
    duration: 1000,
    endOpacity : 1
});
})