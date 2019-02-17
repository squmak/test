var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbylkcmm57shJ1jVFnBeVM3N9ktlU9XDTT8mtdwCAyT_uyoLdfU/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})