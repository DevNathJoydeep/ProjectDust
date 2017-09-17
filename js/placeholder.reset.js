$(document).ready(function(){
	
var timerOne = setInterval(timerOne, 100);

function timerOne() {
	
	if($(window).width()>790) {
		
	var height = $('.leftBar').height();
  $('.rightBar').height(height);
	
	var position = $('.leftBar').position();
	$('.rightBar').css({'top' : position.top - 'px'});
		
	}
	
}

var timer = setInterval(timer, 100);

function timer() {
		
	if($(window).width()<1234) {
		$('#s1').attr("placeholder","1st Sem Marks");
		$('#s2').attr("placeholder","2nd Sem Marks");
		$('#s3').attr("placeholder","3rd Sem Marks");
		$('#s4').attr("placeholder","4th Sem Marks");
		$('#s5').attr("placeholder","5th Sem Marks");
		$('#s6').attr("placeholder","6th Sem Marks");
		$('#s7').attr("placeholder","7th Sem Marks");
		$('#s8').attr("placeholder","8th Sem Marks");
		$('#sl3').attr("placeholder","3rd Sem Marks");
		$('#sl4').attr("placeholder","4th Sem Marks");
		$('#sl5').attr("placeholder","5th Sem Marks");
		$('#sl6').attr("placeholder","6th Sem Marks");
		$('#sl7').attr("placeholder","7th Sem Marks");
		$('#sl8').attr("placeholder","8th Sem Marks");
	}
	
	else {
		$('#s1').attr("placeholder","Enter marks of first semester");
		$('#s2').attr("placeholder","Enter marks of second semester");
		$('#s3').attr("placeholder","Enter marks of third semester");
		$('#s4').attr("placeholder","Enter marks of fourth semester");
		$('#s5').attr("placeholder","Enter marks of fifth semester");
		$('#s6').attr("placeholder","Enter marks of sixth semester");
		$('#s7').attr("placeholder","Enter marks of seventh semester");
		$('#s8').attr("placeholder","Enter marks of eighth semester");
		$('#sl3').attr("placeholder","Enter marks of third semester");
		$('#sl4').attr("placeholder","Enter marks of fourth semester");
		$('#sl5').attr("placeholder","Enter marks of fifth semester");
		$('#sl6').attr("placeholder","Enter marks of sixth semester");
		$('#sl7').attr("placeholder","Enter marks of seventh semester");
		$('#sl8').attr("placeholder","Enter marks of eighth semester");	
	}
	
}
	
});
	