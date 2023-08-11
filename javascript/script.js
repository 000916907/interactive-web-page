$(document).ready(function () {
    // Set up jQuery Validation Plugin
     $("#mailList").validate({
     // Specify the error container
     errorContainer: "#errorContainer",
     // Specify the error placement strategy
     errorPlacement: function (error, element) {
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
     // Specify the event to trigger the validation
     onfocusout: function (element) {
     $(element).valid(); // Trigger validation for the field on focus out
     },
     submitHandler: function (form) {
     if ($("#mailList").valid()) {
     form.submit(); // Submit the form if it passes validation
     }
     },
     invalidHandler: function (form, validator) {
     $("#errorContainer").show(); // Show the error container when there are validation errors
     }
     });
    // Additional function to reset the form
     function resetForm() {
     $("#mailList").validate().resetForm(); // Reset validation state
     $("#mailList")[0].reset(); // Reset form fields
     $("#errorContainer").hide(); // Hide error container
     }
     // Attach resetForm function to the Reset button's click event
     $("button[type='reset']").click(resetForm);
    });
    