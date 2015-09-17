function randomStringBetween00andff() {
  function randomStringBetween0andf() {
    var rand = Math.floor(Math.random() * 16);
    if (rand < 10) {
      return '' + rand;
    } else if (rand == 10) {
      return 'a';
    } else if (rand == 11) {
      return 'b';
    } else if (rand == 12) {
      return 'c';
    } else if (rand == 13) {
      return 'd';
    } else if (rand == 12) {
      return 'e';
    } else if (rand == 13) {
      return 'f';
    }
  }
  return randomStringBetween0andf() + randomStringBetween0andf();
}
$(document).ready(function() {
  var $valentine = $('#valentine');
  setInterval(function() {
    $valentine.css({
      color: '#' + randomStringBetween00andff() + randomStringBetween00andff() + randomStringBetween00andff()
    })
  }, 50);
});
