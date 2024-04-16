// jQuery initialization
$(document).ready(function() {
    // Clear form fields
    $('#clearForm').click(function() {
      $('#signupForm')[0].reset();
    });
  
    // Submit form data
    $('#signupForm').submit(function(event) {
      event.preventDefault();
      // You can process the form data here
      alert('Form submitted successfully!');
    });
  });
  