$(document).ready(function(){
	var choice1 ="";
	var choice2 ="";
	var score = 0;

	$('.card').click(function(){
		choice1= $(this).attr("id");
		console.log(choice1);
	});
	$(".card2").click(function(){
		choice2 = $(this).attr("id");
		console.log(choice2);
			if (choice1===choice2){
				score++;
				console.log(score);
				var selector = "#"+ choice2 + " img";
				console.log(selector);
				$(selector).fadeIn(function(){
					$(this).delay(2000).fadeOut();
				});
				$(".outcome").text("Correct!");
			} else {
				$(".outcome").text("Incorrect!");
			} 
	});
})