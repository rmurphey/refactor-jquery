// refactoring portlets without jQuery UI widget factory
var Portlet = function(el) {
  var id = el.attr('data-id');

  function open() {
    el.removeClass('closed');
  }

  function close() {
    el.addClass('closed');
  }

  function favorite() {
    $.ajax({
      url : '/services/favorite.json',
      dataType : 'json',
      data : { id : id },
      success : function(resp) {
        if (!resp.success) { return; }
        el.addClass('favorite');
        $.publish('/portlet/favorite', [ id ]);
      }
    });  
  }
  
  function unfavorite(favoritedId) {
    if (id == favoritedId) { return; }
    el.removeClass('favorite');
  }

  el.delegate('li.open', 'click', open);
  el.delegate('li.close', 'click', close);
  el.delegate('li.favorite', 'click', favorite);
    
  $.subscribe('/portlet/favorite', unfavorite);
  
  return {
    set : function(opt, val) {
      if (opt == 'open') {
        if (val) {
          open();
        } else {
          close();
        }
        return;
      }
      
      if (opt == 'favorite') {
        if (val) {
          favorite();
        } else {
          el.removeClass('favorite');
        }
      }
    }
  };
};


$(function() {
  $('.portlet').each(function() {
    var $this = $(this);
    $this.data('portlet', new Portlet($this));
  });
});
