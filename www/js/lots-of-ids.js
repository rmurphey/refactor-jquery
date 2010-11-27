$(document).ready(function() {
  // If the hash in the URL matches this thinger, show this thinger
  if (jQuery.url.attr("anchor") == 'thinger_698') {
    $('.toggle-thinger').removeClass('selected');
    $('#thinger_698').addClass('selected');
    $('.thinger').hide();
    $('#thinger_entry_698').show();
    $('#thinger_entry_698 .es').hide();
    $('#thinger_entry_698 .en').show();
  }

  // Onclick: Toggle thinger, and make sure english-language stuff is set
  $('a[href=/doma/thingers-gill/#thinger_698]').click(function() {
    $('.toggle-thinger').removeClass('selected');
    $('#thinger_698').addClass('selected');
    $('.thinger').hide();
    $('#thinger_entry_698').show();
    $('#thinger_entry_698 .es').hide();
    $('#thinger_entry_698 .en').show();
  });
  
  // Show the spanish language content
  $('#thinger_entry_698 .toggle-es').click(function() {
    $('#thinger_entry_698 .es').show();
    $('#thinger_entry_698 .en').hide();
  });
  
  // Show the spanish language content
  $('#thinger_entry_698 .toggle-en').click(function() {
    $('#thinger_entry_698 .es').hide();
    $('#thinger_entry_698 .en').show();
  });
});