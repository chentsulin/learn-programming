
var $now = $('#now');
var today = new Date;
var hours = today.getHours();
var mins = today.getMinutes();
var secs = today.getSeconds();


function generateTimeText(hours, mins, secs) {
  var hoursText = hours >= 10 ? '' + hours : '0' + hours;
  var minsText = mins >= 10 ? '' + mins : '0' + mins;
  var secsText = secs >= 10 ? '' + secs : '0' + secs;
  return hoursText + ':' + minsText + '.' + secsText;
}

function renderTime(hours, mins, secs) {
  $now.text(generateTimeText(hours, mins, secs));
}

renderTime(hours, mins, secs);

setInterval(function() {
  if (secs === 59) {
    if (mins === 59) {
      if (hours === 23) {
        hours = 0;
        mins = 0;
        secs = 0;
      } else {
        hours = hours + 1;
        mins = 0;
        secs = 0;
      }
    } else {
      mins = mins + 1;
      secs = 0;
    }
  } else {
    secs = secs + 1;
  }
  renderTime(hours, mins, secs);
}, 1000);









// 切換 tab
//
var $tabs = $('.tab');

$tabs.on('click', function() {
  var $this = $(this);
  var $heading = $('#heading');

  $('.panel').addClass('hidden');

  if ($this.hasClass('tab-clock')) {
    $heading.text('時鐘');
    $('#clock').removeClass('hidden');
  } else if ($this.hasClass('tab-stopwatch')) {
    $heading.text('碼錶');
    $('#stopwatch').removeClass('hidden');
  } else if ($this.hasClass('tab-countdown')) {
    $heading.text('計時器');
    $('#countdown').removeClass('hidden');
  }

  $('.tab.is-active').removeClass('is-active');
  $this.addClass('is-active');
})
