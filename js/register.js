$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the form data
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var confirmPassword = $('#confirm-password').val();
  
      // Validate the form fields
      var isValid = true;
  
      if (name.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
      }
  
      if (email.trim() === '') {
        isValid = false;
        alert('Please enter your email address.');
      } else if (!isValidEmail(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }
  
      if (password.trim() === '') {
        isValid = false;
        alert('Please enter a password.');
      } else if (password.length < 8) {
        isValid = false;
        alert('Password must be at least 8 characters long.');
      }
  
      if (confirmPassword.trim() === '') {
        isValid = false;
        alert('Please confirm your password.');
      } else if (password !== confirmPassword) {
        isValid = false;
        alert('Passwords do not match.');
      }
  
      // If the form is valid, submit the form
      if (isValid) {
        // Simulate a successful registration
        alert('Registration successful!');
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