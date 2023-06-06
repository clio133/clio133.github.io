$(document).ready(function() {
  // Fetch pet data using AJAX
  $.ajax({
    url: 'pets.json',
    dataType: 'json',
    success: function(data) {
      displayPets(data);
    },
    error: function() {
      $('#pet-list').text('Error loading pet data.');
    }
  });

  // Filter pets based on selected species
  $('#species').change(function() {
    var selectedSpecies = $(this).val();
    filterPets(selectedSpecies);
  });

  // Display all pets or filtered pets
  function displayPets(pets) {
    var petList = $('#pet-list');
    petList.empty();

    if (pets.length === 0) {
      petList.text('No pets found.');
      return;
    }

    $.each(pets, function(index, pet) {
      var petItem = $('<div class="pet-item">');
      petItem.append('<h3>' + pet.name + '</h3>');
      petItem.append('<p>Species: ' + pet.species + '</p>');
      petItem.append('<p>Age: ' + pet.age + '</p>');
      petItem.append('<p>Breed: ' + pet.breed + '</p>');
      petItem.append('<p>Location: ' + pet.location + '</p>');
      petList.append(petItem);
    });
  }

  // Filter pets based on species
  function filterPets(species) {
    $.ajax({
      url: 'pets.json',
      dataType: 'json',
      success: function(data) {
        var filteredPets = data;

        if (species) {
          filteredPets = data.filter(function(pet) {
            return pet.species === species;
          });
        }

        displayPets(filteredPets);
      },
      error: function() {
        $('#pet-list').text('Error loading pet data.');
      }
    });
  }
});
