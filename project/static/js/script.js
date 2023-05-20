document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Perform form validation
      if (form.checkValidity()) {
        // Hide the form and show the message
        form.style.display = "none";
        message.style.display = "block";
        message.innerText = "Your reservation has been made. You will receive an e-mail with detailed information."
      } 
    });
  });
  
