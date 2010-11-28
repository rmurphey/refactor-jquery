var myService = (function() {
  var baseUrl = '/content-service/',
  
      contentTypes = ['post', 'author', 'tag'],
  
      defaults = {
        type : 'GET',
        dataType : 'json'
      },
      
      doAjax = function(settings) {
        $.ajax($.extend({}, defaults, settings));
      },
      
      api = {};
      
  $.each(contentTypes, function(i, contentType){
    api[contentType] = function(id, success, error) {
      success = $.isFunction(success) ? success : $.noop;
      error = $.isFunction(error) ? error : $.noop;
      
      doAjax({
        url : baseUrl + contentType + '/' + id,
        success : success,
        error : error
      });
    };
  });
  
  return api;
  
}());

myService.post(3, function(resp) { console.log(resp); });
