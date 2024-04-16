$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the form data
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Validate the form fields
      var isValid = true;
  
      if (email.trim() === '') {
        isValid = false;
        alert('Please enter your email address.');
      } else if (!isValidEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }
  
      if (password.trim() === '') {
        isValid = false;
        alert('Please enter your password.');
      }
  
      // If the form is valid, submit the form
      if (isValid) {
        // Simulate a successful login
        alert('Login successful!');
        $('form')[0].reset(); // Reset the form after submission
      }
    });
  
    // Helper function to validate email address
    function isValidEmail(email) {
      // Regular expression to validate email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });