// first, just use one document ready function
$(function() {
  // we're going to assume that we don't have control over the html,
  // just the javascript -- however, there are lots of improvements
  // to be made to the markup too

  var thingerId = window.location.hash.replace('thinger_',''),
      thingers = $('.thinger'),
      languages = [ 'en', 'es' ];

  function selectThinger(thingerId) {
    if (!thingerId) { return; }

    var menuItem = $('#thinger_' + thingerId),
        contentItem = $('#thinger_entry' + thingerId);

    menuItem.addClass('selected')
      .siblings().removeClass('selected');

    contentItem.show().siblings('div').hide();

    contentItem.find('.es').hide();
    contentItem.find('.en').show();
  }

  function switchLanguage(targetLanguage) {
    return function() {
      var thinger = $(this).closest('.thinger');
      thinger.find('.' + targetLanguage).show();
      $.each(languages, function(i, lang) {
        if (targetLanguage != lang) {
          thinger.find('.' + lang).hide();
        }
      });
    };
  }

  if (thingerId) { 
    selectThinger(thingerId); 
  }

  $('.toggle-thinger').click(function(e) {
    var thinger = $(this).attr('id').replace('thinger_','');
    selectThinger(thinger);
    e.preventDefault(); 
  });

  $.each(languages, function(i, lang) {
    $('.toggle-' + lang).click(switchLanguage(lang));
  });
});
