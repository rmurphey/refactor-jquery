// original code:
// - no error callbacks
// - every new content type requires a new function
// - repeated strings -- bad for minification & maintenance
function getPost(id, callback) {
  $.getJSON('/content-service/post/' + id, callback);
}

function getAuthor(id, callback) {
  $.getJSON('/content-service/author/' + id, callback);
}

function getTag(id, callback) {
  $.getJSON('/content-service/tag/' + id, callback);
}


// code as API factory:
// - no repetition of strings (better minification)
// - easy to define a set of services
// - success and error callbacks, both optional
// - ability to override default ajax settings
var Service = function(config) {
  var api = {}; 

  $.each(config.services, function(i, svc) {
    api[svc] = function(id, success, error) {
      $.ajax(
        $.extend({}, config.ajaxSettings,
          {
            url : [ config.baseUrl, svc, id ].join('/'),
            dataType : 'json',
            success : success,
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
