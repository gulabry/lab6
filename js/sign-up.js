//signup.js 
// add your JavaScript code to this file

$(function(){

	var stateSelect = $(".us-states");
	var option;

	$.each(usStates, function() {
		option = $(document.createElement("option"));
		option.attr("value", this.abbrevation);
		option.html(this.name);
		stateSelect.append(option);
	});

	$('.signup-form').submit(function(){

	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    var signupForm = $(this);

	    if (addr1Value.length > 0) {
	        var zip = form.find("input[name=zip]");
	        var zipValue = zip.val();
	   		if (zipValue.length > 0) {
	    		//No action
	    	} else {
	            alert("Input a valid zip code");
	            return false;
	        	}
	        }
	});

    $('.cancel-signup').click(function(){
            $('.cancel-signup-modal').modal();
    });

    $('.btn-abandon').click(function(){
        window.location = 'http://www.google.com';   
    });

});