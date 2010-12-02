// refactoring portlets without jQuery UI widget factory
var Portlet = function(el) {
  var id = el.attr('data-id');

  function open() {
    el.removeClass('closed');
  }

  function close() {
    el.addClass('closed');
  }

  function favorite(favoritedId) {
    if (id == favoritedId) { return; }
    el.removeClass('favorite');
  }

  el.delegate('li.open', 'click', open);
  el.delegate('li.close', 'click', close);
  el.delegate('li.favorite', 'click', favorite);
    
  $.subscribe('/portlet/favorite', unfavorite);
  
  return {
    
  };
};


$(function() {
  $('.portlet').each(function() {
    new Porltet($(this));
  });
});
