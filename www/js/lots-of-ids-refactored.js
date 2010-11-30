$(function() {
  var thingerId = window.location.hash.replace('#thinger_entry_',''),

      /**
       * by maintaining our list of languages in a single place,
       * we make it easy to change the languages our code knows about,
       * rather than hard-coding them in the body of the code
       */
      languages = [ 'en', 'es' ];

  /**
   * what does it mean to select a thinger? everything we need to do,
   * we can do if we know the numeric id of the thinger we're trying
   * to select, so we'll create a function that takes that integer id
   * as its argument and encapsulates the code associated with 
   * showing a thinger.
   */
  function selectThinger(thingerId) {
    if (!thingerId) { return; }

    var menuItem = $('#thinger_' + thingerId),
        contentItem = $('#thinger_entry_' + thingerId);

    menuItem.addClass('selected')
      .siblings().removeClass('selected');

    contentItem.show().siblings('div').hide();

    contentItem.find('.es').hide();
    contentItem.find('.en').show();
  }

  /**
   * ditto for languages -- switching to a given language is 
   * a matter of saying which language we want to switch to,
   * showing related elements, then hiding elements for all
   * other languages (as defined by the languages array)
   */
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

  /**
   * if a hash is present in the URL, show the selected item
   */
  if (thingerId) { 
    selectThinger(thingerId); 
  }

  /**
   * set up behavior for *all* thinger menu items at once,
   * and use the id attribute of the menu item to determine
   * the id we're trying to control
   */
  $('.toggle-thinger').click(function(e) {
    var thinger = $(this).attr('id').replace('thinger_','');
    selectThinger(thinger);
    e.preventDefault(); 
  });

  /**
   * set up the language toggling behavior
   * for each language defined at the beginning of the code
   */
  $.each(languages, function(i, lang) {
    $('.toggle-' + lang).click(switchLanguage(lang));
  });
});
