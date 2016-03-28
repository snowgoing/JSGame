$(document).ready(function(){
	var right = 0;
	var wrong = 0;


	color();
	
	$('.circle1').click(function(e){
		var choiceRGB = 1;
		console.log(choiceRGB);
		hexCheck(choiceRGB);
	})
	$('.circle2').click(function(e){
		var choiceRGB = 2;
		console.log(choiceRGB);
		hexCheck(choiceRGB);
	})
	$('.circle3').click(function(e){
		var choiceRGB = 3;
		console.log(choiceRGB);
		hexCheck(choiceRGB);
	})
	$('.hint').click(function(e){
		hint();
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
		var c = allCircles.indexOf(b) + 1;
		
		$('.hex').text(b);
		$('.match').text(c);	
	}	


	function hexCheck(val) {
		var match = $('.match').text().trim();
		console.log(match);
		if(val == match){
			right += 1;
			$('.right').text(right);
			color();
		} else {
			wrong += 1;
			$('.wrong').text(wrong);
			showAnswer();
		}	
		clearHint();
	}

	function showAnswer(){
			var a = $('.match').text().trim();
			var b = '.circle' + a;
			$(b).css('border', '8px solid #F9E239');
			clearAnswer(b);
	}


	function clearAnswer(val){
		setTimeout(function() {
			$(val).css('border', '1px solid #08043E')
		}, 3000);
		setTimeout(function(){
			color();
		}, 3000);
	}

	function hint(){
		var rgbClue1 = $('.circle1').css('background-color');
		var rgbClue2 = $('.circle2').css('background-color');
		var rgbClue3 = $('.circle3').css('background-color');
		$('.rgbHint1').text(rgbClue1);
		$('.rgbHint2').text(rgbClue2);
		$('.rgbHint3').text(rgbClue3);
	}
		
	function clearHint(){
		$('.rgbHint1').text("");
		$('.rgbHint2').text("");
		$('.rgbHint3').text("");
	}




})
