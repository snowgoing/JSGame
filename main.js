$(document).ready(function(){
	color();
	
	$('.circle1').click(function(e){
		var choiceRGB = $(this).css('background-color');
		console.log(choiceRGB);
	})
	$('.circle2').click(function(e){
		var choiceRGB = $(this).css('background-color');
		console.log(choiceRGB);
	})
	$('.circle3').click(function(e){
		var choiceRGB = $(this).css('background-color');
		console.log(choiceRGB);
	})


	function color() {
		var a = []; 
		var random1 = 0;  
		var circle1 = [];
		var circle2 = [];
		var circle3 = []; 
		for(let i = 0; i < 6; i += 1) {
			a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
			random1 = Math.round(Math.random() * 15);
			random2 = Math.round(Math.random() * 15);
			random3 = Math.round(Math.random() * 15);
			circle1.push(a[random1]);
			circle2.push(a[random2]);
			circle3.push(a[random3]);
		}
			circle1 = "#" + circle1.join("");
			circle2 = "#" + circle2.join("");
			circle3 = "#" + circle3.join("");
		$('.circle1').css('background-color', circle1);
		$('.circle2').css('background-color', circle2);
		$('.circle3').css('background-color', circle3);

		var allCircles = [circle1, circle2, circle3];
		var b = allCircles[Math.round(Math.random() * 2)]
		
		$('.hex').text(b);
		hexCheck();

		var wrong = 0;
		var right = 0;
		
		
		function hexCheck() {
			$('.circle1').click(function(){
				if(circle1 === b){
					right += 1;
					$(".right").text(right);
				} else {
					wrong += 1;
					$(".wrong").text(wrong);
				}

			color();
			});
			
			$('.circle2').click(function(){
				if(circle2 === b){
					right += 1;
					$(".right").text(right);
				} else {
					wrong += 1;
					$(".wrong").text(wrong);
				}
			color();
			});
			
			$('.circle3').click(function(){
				if(circle3 === b){
					right += 1;
					$(".right").text(right);
				} else {
					wrong += 1;
					$(".wrong").text(wrong);
				}
			
			color();
			});

		}

		// function showAnswer() {
		// 	$(b).addClass("answer")
		// 	setInterval($(".answer").show()), 4000;
		// 	$(".answer").hide();
		// }

		// function removeAnswer(){
		// 	$('.container').removeClass("answer");
		// }
	}

	




})
