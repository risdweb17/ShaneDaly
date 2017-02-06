$(document).ready(function(){
	$('#prof_pic').hide().delay(5000).fadeIn(3000);
	$('.bio_text').hide().delay(4000).fadeIn(1500);
	$('.background').delay(1000).backgroundBlur({
		imageURL : 'https://github.com/risdweb17/ShaneDaly/blob/gh-pages/project_3/images/background_images/home/bio/_MG_0673.jpg?raw=true',
		blurAmount : 3,
		imageClass : 'bg-blur',
	});
})