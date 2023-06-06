$(document).ready(function() {
    var factPlaceholder = $('#fact-placeholder');
  
    // Function to fetch and update pet fact
    function fetchPetFact() {
      $.ajax({
        url: 'https://catfact.ninja/fact?max_length=140',
        dataType: 'json',
        success: function(data) {
          factPlaceholder.text("Pet fact: " + data.fact);
        },
        error: function() {
          factPlaceholder.text('Failed to fetch pet fact.');
        }
      });
    }
  
    // Fetch and update pet fact initially
    fetchPetFact();
  
    // Fetch and update pet fact every 10 seconds
    setInterval(fetchPetFact, 10000);
  });
  