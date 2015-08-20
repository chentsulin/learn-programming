$(document).ready(function() {
  var $effect = $('#effect');
  var left = +($effect.css('left').split('px')[0]);
  $effect.animate({
    left: '+=800'
  }, 2000);
});
