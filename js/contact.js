$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the form data
      var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };
  
      // Send the form data using AJAX (you'll need to handle this on the server-side)
      $.ajax({
        type: 'POST',
        url: 'path/to/your/server-side-script.php',
        data: formData,
        success: function(response) {
          // Handle the successful response
          console.log(response);
          alert('Message sent successfully!');
          $('form')[0].reset(); // Reset the form after submission
        },
        error: function(xhr, status, error) {
          // Handle the error
          console.error(error);
          alert('Error sending message. Please try again later.');
        }
      });
    });
  });