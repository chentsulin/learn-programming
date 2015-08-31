$('.input').on('keypress', function() {
  var inputText = $(this).val()
  $('.display').text(inputText);
})
