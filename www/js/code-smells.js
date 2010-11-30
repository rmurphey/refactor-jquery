// SMELLY: HTML in your JavaScript
$('#showMessage').click(function() {
  $('<div>' +
    '<h1>' + $('#messageTitle').val() + '</h1>' +
    '<p>' + $('#messageText').val() + '</p>' +
    '</div>')
    .appendTo('#messageContainer')
});

// MINTY FRESH: Use templates instead
<script type="text/x-jquery-tmpl" id="messageTemplate">
  <div>
    <h1>${title}</h1>
    <p>${text}</p>
  </div>
</script>

$('#messageTemplate').template('messageTemplate');

$.tmpl('messageTemplate', {
  title : $('#messageTitle').val(),
  text : $('#messageText').val()
})
.appendTo('#messageContainer');


// SMELLY: Changing style information in JavaScript
$('p.special').click(function() {
  $(this).css({
    'color' : 'red',
    'font-weight' : 'bold'
  });
})

// MINTY FRESH: Keep presentation information in CSS
p.extraSpecial {
  color: red;
  font-weight: bold;
}

$('p.special').click(function() {
  $(this).addClass('extraSpecial');
});


// SMELLY: Duplicating jQuery functionality
function isItemInArray(item, arr) {
  var inArray = false, 
      len = arr.length;

  for (var i = 0; i < len; i++) {
    if (item == arr[i]) {
      inArray = true;
    }
  }
  
  return inArray;
}

// MINTY FRESH: Use jQuery!
function isItemInArray(item, arr) {
  return $.inArray(item, arr) > -1;
}


// SMELLY: Repetition that jQuery lets you avoid
$('a.thinger').each(function() {
  $(this).attr('href', $(this).attr('href') + '?ajax=true');
});
$('a.thinger').hide();
$('#myButton').click(function(){
  $('a.thinger').show();
})

// MINTY FRESH: Use the chain and setter functions!
var thingers = $('a.thinger'), // store selection in a var
    button = $('#myButton');   // just in case!

thingers.attr('href', function(idx, oldVal) {
  // pass a setter function & avoid the need
  // to iterate over matches 
  return oldVal + '?ajax=true';
}).hide();

button.click(function() {
  thingers.show();
});


// SMELLY: Deeply nested anonymous functions
$(document).ready(function() {
  $('#enableAwesome').click(function() {
    $('ul.foo li').each(function() {
      var li = $(this);

      li.data('name', li.html())
        .find('a.remove').click(function(e) {
          $.ajax({
            url : $(this).attr('href'),
            dataType : 'json',
            type : 'post',
            success : function(resp) {
              if (resp.ok) { li.remove(); }
            },
            error : console.log
          })
          e.preventDefault();
        });
    })
  });
});

// MINTY FRESH: Isolate functionality into an object with methods
var awesome = {
  enableListItem : function() {
    var li = $(this);
    li.data('name', li.html());
  },
  
  removeListItem : function() {
    var a = $(this),
        li = a.closest('li');

    awesome.removeOnServer({
      url : a.attr('href'),
      success : function(resp) {
        if (resp.ok) { li.remove(); }
      }
    });
  },
  
  removeOnServer : function (config) {
    var defaults = {
          type : 'post',
          dataType : 'json',
          error : console.log
        },
        settings = $.extend({}, defaults, config);

    if (!settings.url) { return; }
    $.ajax(config);
  }
};

$(document).ready(function() {
  $('#enableAwesome').click(function() {
    $('ul.foo li')
      .each(awesome.enableListItem)
      .delegate('a.remove', 'click', awesome.removeListItem);
  });
});


// SMELLY: Repetitive logic blocks
function isItABigNumber(num) {
  if(num > 5000) {
    $('#myContainer').html('<p>It was a big number</p>');
    $('#myInput').val(num);
    $('.thinger').hide();
  } else {
    $('#myContainer').html('<p>It was not a big number</p>');
    $('#myInput').val('');
    $('.thinger').show();
  }
}

// MINTY FRESH: Only repeat what needs repeating
function isItABigNumber(num) {
  var big = num > 5000;
      
  $('#myContainer').html(big ? 
    '<p>It was a big number</p>' : 
    '<p>It was not a big number</p>');
  $('#myInput').val(big ? num : '');
  $('.thinger')[big ? 'hide' : 'show']();
}





// SMELLY: Passing a lot of optional arguments to a function
function crazyConcatenation(selector, word1, word2, word3, repeat) {
  var arr = [], 
      words = [],
      joinedWords;
  
  if (selector == null) { return; }
  if (word1 == null) { return; }
  
  if (word2 != null) { words.push(word2); }
  if (word3 != null) { words.push(word3); }
  if (!repeat) { repeat = 5; }
  
  joinedWords = words.join(', ');
      
  while (repeat--) { arr.push(joinedWords); }
  
  $(selector).html(arr.join('<br/>'))
}

crazyConcatenation('#foo', 'Hello', null, null, 5);

// MINTY FRESH: Using an object instead
function crazyConcatenation(config) {
  // indicate clearly what's required
  if (
    !config.selector || 
    !config.words || 
    !config.words.length
  ) { return; }
  
  var defaults = { repeat : 5 },
      settings = $.extend({}, defaults, config),
      joinedWords = settings.words.join(', ');
      
  while (settings.repeat--) {
    arr.push(joinedWords);
  }
  
  $(settings.selector).html(arr.join('<br/>'))
}

crazyConcatenation({
  selector : '#foo',
  words : [ 'foo', 'bar', 'baz' ],
  repeat : 20
});


// SMELLY: Overtesting for truthiness
if (errorMsg != null && errorMsg.length > 0) {
  // ...
}

// MINTY FRESH: Be as terse as you can
if (errorMsg && errorMsg.length) {
  // ...
}

// SMELLY
if (total == null || total == "0") {
  // ...
}

// MINTY FRESH
if (!parseInt(total, 10)) {
  // ... 
}

// SMELLY
if (price == null) {
  // ...
} else if(discountPrice != null && price == discountPrice) {
  // ...
}

// MINTY FRESH
if (!price) {
  // ...

// we already know that price isn't null,
// so why test if discountPrice is? if it's
// equal to price, we know it's not null
} else if (price == discountPrice) {
  // ...
}
