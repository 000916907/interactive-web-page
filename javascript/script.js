(document).ready(function() {
	("#mailList").validate({
		errorContainer: "#errorContainer",
		errorPlacement: function(error) {
			error.appendTo("#errorContainer");
			error.wrap("<div class='error-message'></div>");
		},
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true,
				pattern: /^\d{3}-\d{3}-\d{4}$/
			},
			email: {
				required: true,
				email: true
			},
			birthdate: {
				required: true
			},
			gender: {
				required: true
			},
			country: {
				required: true
			}
		},
		messages: {
			name: "Please enter your name",
			phone: {
				required: "Please enter a valid phone number",
				pattern: "Please enter a phone number in the format XXX-XXX-XXXX"
			},
			email: "Please enter a valid email address",
			birthdate: "Please pick a valid birth date",
			gender: "Please choose your gender",
			country: "Please select a valid country"
		},
		onfocusout: function(element) {
			(element).valid(); 
		},
		submitHandler: function(form) {
			if (("#mailList").valid()) {
				form.submit(); 
			}
		},
	});
	function resetForm() {
		("#mailList").validate().resetForm(); 
		("#mailList")[0].reset(); 
		("#errorContainer").hide(); 
	}
	("button[type='reset']").click(resetForm);
});

