$(document).ready(function() {
  // If the hash in the URL matches this thinger, show this thinger
  if (window.location.hash == 'thinger_698') {
    $('.toggle-thinger').removeClass('selected');
    $('#thinger_698').addClass('selected');
    $('.thinger').hide();
    $('#thinger_entry_698').show();
    $('#thinger_entry_698 .es').hide();
    $('#thinger_entry_698 .en').show();
  }

  // Onclick: Toggle thinger, and make sure english-language stuff is set
  $('a[href=#thinger_entry_698]').click(function() {
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

$(document).ready(function() {
  // If the hash in the URL matches this thinger, show this thinger
  if (window.location.hash == 'thinger_699') {
    $('.toggle-thinger').removeClass('selected');
    $('#thinger_699').addClass('selected');
    $('.thinger').hide();
    $('#thinger_entry_699').show();
    $('#thinger_entry_699 .es').hide();
    $('#thinger_entry_699 .en').show();
  }

  // Onclick: Toggle thinger, and make sure english-language stuff is set
  $('a[href=#thinger_entry_699]').click(function() {
    $('.toggle-thinger').removeClass('selected');
    $('#thinger_699').addClass('selected');
    $('.thinger').hide();
    $('#thinger_entry_699').show();
    $('#thinger_entry_699 .es').hide();
    $('#thinger_entry_699 .en').show();
  });
  
  // Show the spanish language content
  $('#thinger_entry_699 .toggle-es').click(function() {
    $('#thinger_entry_699 .es').show();
    $('#thinger_entry_699 .en').hide();
  });
  
  // Show the spanish language content
  $('#thinger_entry_699 .toggle-en').click(function() {
    $('#thinger_entry_699 .es').hide();
    $('#thinger_entry_699 .en').show();
  });
});

