jQuery(function($){

	// function effect label form when add value
	$('.form-group').each(function(){
		var element = $(this).children('input');
		element.blur(function(){
			if (element.val().length !== 0) {
			    $(this).nextAll('label').addClass('active');
			    console.log($(this).val());
			}else {
				$(this).nextAll('label').removeClass('active');
			}
		})

		//enter next input 
		$('input, select').keydown(function (e) {
		    if (e.which === 13) {
		        var index = $('input, select').index(this) + 1;
		        $('input, select').eq(index).focus();
		    }
		});

		// click next and prev tabs
		$('.next').click(function(){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
		});

		$('.prev').click(function(){
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
		});
	})

	//add datetimepicker
	$('.datetimepicker').datetimepicker();

})