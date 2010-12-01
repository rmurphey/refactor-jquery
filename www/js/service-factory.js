// code as API factory:
// - no repetition of strings (better minification)
// - easy to define a set of services
// - success and error callbacks, both optional
// - ability to override default ajax settings
// - one-stop caching
var ServiceFactory = function(config) {
  var api = {}, 
      cache = {}; 

  $.each(config.services, function(i, svc) {
    api[svc] = function(id, success, error) {
      var url = [ config.baseUrl, svc, id ].join('/');  

      success = $.isFunction(success) ? success : false;

      if (success && cache[url]) {
        success(cache[url]);
        return;
      }

      $.ajax(
        $.extend({}, config.ajaxSettings,
          {
            url : url,
            dataType : 'json',
            success : function(data) {
              cache[url] = data;
              success && success(data);
            },
            error : error
          }
        )
      );
    };
  });

  return api;
};

// using the new Service factory
var myService = Service({
  baseUrl : '/content-service',
  services : [ 'post', 'author', 'tag' ]
});

myService.post(3, function(resp) { console.log(resp); });
