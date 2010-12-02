$(function() {
  $.widget('my.portlet', {
    portlets : [],

    _create : function() {
      this.id = this.element.attr('data-id');

      this.element.delegate('li.open', 'click', $.proxy(function() {
        this._setOption('open', true);
      }, this));
        
      this.element.delegate('li.close', 'click', $.proxy(function() {
        this._setOption('open', false);
      }, this));

      this.element.delegate('li.favorite', 'click', $.proxy(function() {
        this._setOption('favorite', true);
      }, this));

      $.subscribe('/portlet/favorite', $.proxy(function(id) {
        if (id != this.id) {
          this._setOption('favorite', false);
        }
      }, this));
    },

    _setOption : function(key, val) {
      if (key == 'favorite') {
        if (val) { 
          this._favorite(); 
        } else {
          this.element.removeClass('favorite');
        }
        return;
      }

      if (key == 'open') {
        this.element[val ? 'removeClass' : 'addClass']('closed');
        return;
      }
    },

    _favorite : function() {
      $.ajax({
        url : '/services/favorite.json',
        dataType : 'json',
        data : { id : this.id },
        context : this,
        success : function(resp) {
          if (!resp.success) { return; }
          this.element.addClass('favorite');
          $.publish('/portlet/favorite', [ this.id ]);
        }
      });
    }

  });

  $('.portlet').portlet();

});
