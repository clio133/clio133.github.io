$(document).ready(function(){

  // Set #registration-date input to datepicker
  $("#registration-date").datepicker({
    dateFormat: "dd-mm-yy", // Turkey date format
    minDate: 0 // Set minimum date to today
  });

  // Set tooltip for #registration-date input
  $("#registration-date").tooltip();

  // open dialog box for user agreement
  var userAgreementLink = $('#user-agreement-link');
  var userAgreementDialog = $('#dialog-user-agreement');

  userAgreementLink.on('click', function(event) {
    event.preventDefault();
    userAgreementDialog.dialog('open');
  });

  userAgreementDialog.dialog({
    autoOpen: false,
    modal: true,
    width: 600,
    buttons: {
        Agree: function() {
          $(this).dialog('close');
        }
      }
  });

});