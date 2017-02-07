$(document).ready(function(){
	
	var triangles = "$";

	function drawTriangle() {
			for( var index = 0; index<7; index++){

				triangles = triangles + "#";
				console.log(triangles);
				$("#pyramid").append(triangles + "<br>");
			}

	}

	var food = ['eggs', 'chicken', 'pasta', 'sushi', 'cereal', 'oats', 'apples', 'cheese', 'poptarts', 'pancakes']
	var allFood = "";

	console.log(food[1]);

	for(var j=0; j<food.length; j++){
		console.log(food[j]);
		allFood = allFood + " " + food[j];
	}
	$("#pyramid").append(allFood);
});