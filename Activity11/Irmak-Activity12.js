$(document).ready(function() {
    // Event handler for sidebar links
    $("#nav_list a").click(function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      var title = $(this).attr("title"); // Get the title attribute of the clicked link
      let jsonFile = "json_files/" + title + ".json"; // Build the JSON file name based on the title


      // Clear the main element
      $("main").empty();
  
      // Make an AJAX request to retrieve the JSON data
      $.ajax({
        url: jsonFile,
        dataType: "json",
        success: function(data) {
            var speaker = data.speakers[0]; // Access the first speaker object
          
            // Create HTML elements for the speaker data
            var speakerHTML = "<h1>" + speaker.title + "</h1>"; 
            speakerHTML += "<img src='" + speaker.image + "'>";
            speakerHTML += "<h2>" + speaker.month + "<br>" + speaker.speaker + "</h2>";
            speakerHTML += "<p>" + speaker.text + "</p>";
          
            // Append the speaker HTML to the main element
            $("main").html(speakerHTML);
        },
        error: function() {
          console.log("Error loading JSON file.");
        }
      });
    });
  });
  