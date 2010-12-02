$(function() {
  var portlets = $('.portlet');

  $('.portlet .favorite').click(function() {
    var portlet = $(this).closest('.portlet'),
        id = portlet.attr('data-id');

    $.ajax({
      url : '/services/favorite.json',
      dataType : 'json',
      data : { id : id },
      success : function(resp) {
        if (!resp.success) { return; }
        portlets.removeClass('favorite').find('.favorite').show();
        portlet.addClass('favorite').find('.favorite').hide();
      }
    });
  });

  $('.portlet .open').click(function() {
    $(this).closest('.portlet').removeClass('closed');
  });

  $('.portlet .close').click(function() {
    $(this).closest('.portlet').addClass('closed');
  });
});
