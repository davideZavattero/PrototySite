$(document).ready(function() {
	
	$('#bar').hide();
	
	var hide = true;
	
	$('#container').click(function(){
		if(hide){
			$('#bar').stop().slideDown('fast');
			hide = false;
		}else{
			$('#bar').stop().slideUp('fast');
			hide = true;
		}
	});
	
	$('.list ul').hide();
	
	$('.list').mouseover(function(){
		$('ul', this).stop().slideDown('fast');
	});
	
	$('.list').mouseleave(function(){
		$('ul', this).delay(300).stop().slideUp('fast');
	});
	
});