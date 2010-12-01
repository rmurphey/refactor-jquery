// original code
$(function() {
  function getPost(postId, callback) {
    $.getJSON('/content-service/post/' + postId, callback);
  }

  getSomething(3, function(resp) {
    console.log(resp);
  });
});

// code with caching
$(function() {
  var cache = {};

  function getPost(postId, callback) {
    var url = '/content-service/post/' + postId;

    if (cache[url]) {
      callback(cache[url]);
      return;
    } else {
      $.ajax({
        url : '/content-service/post/' + postId,
        type : 'GET',
        dataType : 'json',
        success : function(resp) {
          cache[url] = resp;
          callback(resp);
        }
      });
    }
  }

  getPost(3, function(resp) {
    console.log(resp);
  });
});
