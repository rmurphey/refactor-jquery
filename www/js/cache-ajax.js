// original code
$(function() {
  function getSomething(query, callback) {
    $.ajax({
      url : 'foo.php',
      data : query,
      type : 'GET',
      dataType : 'json',
      success : callback
    });
  }

  getSomething({ bar : 'baz' }, function(resp) {
    console.log(resp);
  });

});

// code with caching
$(function() {
  var cache = {};

  function getSomething(query, callback) {
    var key = $.param(query);

    if (cache[key]) {
      callback(cache[key]);
      return;
    } else {
      $.ajax({
        url : 'foo.php',
        data : query,
        type : 'GET',
        dataType : 'json',
        success : function(resp) {
          cache[key] = resp;
          callback(resp);
        }
      });
    }
  }

  getSomething({ bar : 'baz' }, function(resp) {
    console.log(resp);
  });

});
