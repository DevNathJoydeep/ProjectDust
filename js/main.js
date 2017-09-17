$(document).ready(function(){
	
	/*---------------------------------------------------------------
								
															NORMAL
															
	---------------------------------------------------------------*/

	var normalVar = setInterval(normalTimer, 100);

	function normalTimer() {
		
		var normal_m1=$('#s1').val();
		var normal_m2=$('#s2').val();
		var normal_m3=$('#s3').val();
		var normal_m4=$('#s4').val();
		var normal_m5=$('#s5').val();
		var normal_m6=$('#s6').val();
		var normal_m7=$('#s7').val();
		var normal_m8=$('#s8').val();
		
		if(normal_m1>=0 && normal_m2>=0 && normal_m3>=0 && normal_m4>=0 && normal_m5>=0 && normal_m6>=0 && normal_m7>=0 && normal_m8>=0 && normal_m1<=1100 && normal_m2<=1200 && normal_m3<=1150 && normal_m4<=1150 && normal_m5<=1150 && normal_m6<=1150 && normal_m7<=1200 && normal_m8<=1100 ) {
				
    var normal_p1=(normal_m1*100)/1100;
		var normal_p2=(normal_m2*100)/1200;
		var normal_p3=(normal_m3*100)/1150;
		var normal_p4=(normal_m4*100)/1150;
		var normal_p5=(normal_m5*100)/1150;
		var normal_p6=(normal_m6*100)/1150;
		var normal_p7=(normal_m7*100)/1200;
		var normal_p8=(normal_m8*100)/1100;
		
		$('#p1').val(normal_p1.toFixed(2)+"%");
		$('#p2').val(normal_p2.toFixed(2)+"%");
		$('#p3').val(normal_p3.toFixed(2)+"%");
		$('#p4').val(normal_p4.toFixed(2)+"%");
		$('#p5').val(normal_p5.toFixed(2)+"%");
		$('#p6').val(normal_p6.toFixed(2)+"%");
		$('#p7').val(normal_p7.toFixed(2)+"%");
		$('#p8').val(normal_p8.toFixed(2)+"%");
		}
	}
	
	$("#buttonNormalCalc").on("click", function() {
		
		var normal_m1=$('#s1').val();
		var normal_m2=$('#s2').val();
		var normal_m3=$('#s3').val();
		var normal_m4=$('#s4').val();
		var normal_m5=$('#s5').val();
		var normal_m6=$('#s6').val();
		var normal_m7=$('#s7').val();
		var normal_m8=$('#s8').val();
		
		if(normal_m1>=0 && normal_m2>=0 && normal_m3>=0 && normal_m4>=0 && normal_m5>=0 && normal_m6>=0 && normal_m7>=0 && normal_m8>=0 && normal_m1<=1100 && normal_m2<=1200 && normal_m3<=1150 && normal_m4<=1150 && normal_m5<=1150 && normal_m6<=1150 && normal_m7<=1200 && normal_m8<=1100 ) {
	
			var normal_p1=(normal_m1*100)/1100;
			var normal_p2=(normal_m2*100)/1200;
			var normal_p3=(normal_m3*100)/1150;
			var normal_p4=(normal_m4*100)/1150;
			var normal_p5=(normal_m5*100)/1150;
			var normal_p6=(normal_m6*100)/1150;
			var normal_p7=(normal_m7*100)/1200;
			var normal_p8=(normal_m8*100)/1100;
			
			var normal_marks1=normal_m1*0.1;
			var normal_marks2=normal_m2*0.1;
			var normal_marks3=normal_m3*0.2;
			var normal_marks4=normal_m4*0.2;
			var normal_marks5=normal_m5*0.7;
			var normal_marks6=normal_m6*0.7;
			var normal_marks7=normal_m7*1;
			var normal_marks8=normal_m8*1;
		
			var normalMarks = Number(normal_marks1)+Number(normal_marks2)+Number(normal_marks3)+Number(normal_marks4)+Number(normal_marks5)+Number(normal_marks6)+Number(normal_marks7)+Number(normal_marks8);
		
			var normalPerc = (normalMarks*100)/4600;
				$('.finalPerc').text(normalPerc.toFixed(2)+"%");
		
			if(normalPerc>=65) {
				$('.finalPercQuote').text("It's time to throw a party !!!");
			}
			else {
				$('.finalPercQuote').text("Better luck next time.");
			}
			
		}
		
		else {
			alert("Please stop fooling around and enter your real marks.");
		}
		
		});
	
	
	
	
	
	
	
	
	
	/*---------------------------------------------------------------
								
															LATERAL
															
	---------------------------------------------------------------*/

	var lateralVar = setInterval(lateralTimer, 100);

	function lateralTimer() {
		
		var lateral_m3=$('#sl3').val();
		var lateral_m4=$('#sl4').val();
		var lateral_m5=$('#sl5').val();
		var lateral_m6=$('#sl6').val();
		var lateral_m7=$('#sl7').val();
		var lateral_m8=$('#sl8').val();
		
		if(lateral_m3>=0 && lateral_m4>=0 && lateral_m5>=0 && lateral_m6>=0 && lateral_m7>=0 && lateral_m8>=0 && lateral_m3<=1150 && lateral_m4<=1150 && lateral_m5<=1150 && lateral_m6<=1150 && lateral_m7<=1200 && lateral_m8<=1100 ) {
			
		var lateral_p3=(lateral_m3*100)/1150;
		var lateral_p4=(lateral_m4*100)/1150;
		var lateral_p5=(lateral_m5*100)/1150;
		var lateral_p6=(lateral_m6*100)/1150;
		var lateral_p7=(lateral_m7*100)/1200;
		var lateral_p8=(lateral_m8*100)/1100;
		
		$('#pl3').val(lateral_p3.toFixed(2)+"%");
		$('#pl4').val(lateral_p4.toFixed(2)+"%");
		$('#pl5').val(lateral_p5.toFixed(2)+"%");
		$('#pl6').val(lateral_p6.toFixed(2)+"%");
		$('#pl7').val(lateral_p7.toFixed(2)+"%");
		$('#pl8').val(lateral_p8.toFixed(2)+"%");
		}
	}
	
	$("#buttonLateralCalc").on("click", function() {
		
		var lateral_m1=$('#sl1').val();
		var lateral_m2=$('#sl2').val();
		var lateral_m3=$('#sl3').val();
		var lateral_m4=$('#sl4').val();
		var lateral_m5=$('#sl5').val();
		var lateral_m6=$('#sl6').val();
		var lateral_m7=$('#sl7').val();
		var lateral_m8=$('#sl8').val();
		
		if(lateral_m3>=0 && lateral_m4>=0 && lateral_m5>=0 && lateral_m6>=0 && lateral_m7>=0 && lateral_m8>=0 && lateral_m3<=1150 && lateral_m4<=1150 && lateral_m5<=1150 && lateral_m6<=1150 && lateral_m7<=1200 && lateral_m8<=1100 ) {
	
			var lateral_p3=(lateral_m3*100)/1150;
			var lateral_p4=(lateral_m4*100)/1150;
			var lateral_p5=(lateral_m5*100)/1150;
			var lateral_p6=(lateral_m6*100)/1150;
			var lateral_p7=(lateral_m7*100)/1200;
			var lateral_p8=(lateral_m8*100)/1100;
			
			var lateral_marks3=lateral_m3*0.4;
			var lateral_marks4=lateral_m4*0.2;
			var lateral_marks5=lateral_m5*0.7;
			var lateral_marks6=lateral_m6*0.7;
			var lateral_marks7=lateral_m7*1;
			var lateral_marks8=lateral_m8*1;
		
			var lateralMarks = Number(lateral_marks3)+Number(lateral_marks4)+Number(lateral_marks5)+Number(lateral_marks6)+Number(lateral_marks7)+Number(lateral_marks8);
		
			var lateralPerc = (lateralMarks*100)/4600;
				$('.finalPerc').text(lateralPerc.toFixed(2)+"%");
		
			if(lateralPerc>=65) {
				$('.finalPercQuote').text("It's time to throw a party !!!");
			}
			else {
				$('.finalPercQuote').text("Better luck next time.");
			}
			
		}
		
		else {
			alert("Please stop fooling around and enter your real marks.");
		}
		
		});
	
	
	
	
	
	
	
	
	
	
	
	
});
	
	
	
	
	
	