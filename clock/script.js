
// 顯示時鐘
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
});



// stopwatch
var isStarted = false;
var total = 0;
var period = 0;
var count = 1;
var interval;
var $totalTimer = $('.main-timer');
var $periodTimer = $('.second-timer');

function toTimeFormat(count) {
  var centisecs = count % 100;
  var totalSecs = Math.floor(count / 100);
  var mins = Math.floor(totalSecs / 60);
  var secs = totalSecs % 60;
  var centisecsText = centisecs >= 10 ? '' + centisecs : '0' + centisecs;
  var minsText = mins >= 10 ? '' + mins : '0' + mins;
  var secsText = secs >= 10 ? '' + secs : '0' + secs;
  return minsText + ':' + secsText + '.' + centisecsText;
}

function renderTatal(total) {
  $totalTimer.text(toTimeFormat(total));
}

function renderPeriod(period) {
  $periodTimer.text(toTimeFormat(period));
}

var $startButton = $('#btn-stopwatch-start');
var $stopButton = $('#btn-stopwatch-stop');
var $splitButton = $('#btn-stopwatch-split');
var $resetButton = $('#btn-stopwatch-reset');

$startButton.on('click', function() {
  interval = setInterval(function() {
    total = total + 1;
    period = period + 1;
    renderTatal(total);
    renderPeriod(period);
  }, 10);
  $startButton.addClass('hidden');
  $stopButton.removeClass('hidden');
  $resetButton.addClass('hidden');
  $splitButton.removeClass('hidden').removeClass('btn-disabled').prop('disabled', false);
});

$stopButton.on('click', function() {
  clearInterval(interval);
  $stopButton.addClass('hidden');
  $startButton.removeClass('hidden');
  $splitButton.addClass('hidden');
  $resetButton.removeClass('hidden');
});

$splitButton.on('click', function() {
  console.log('第' + count + '次  ' + toTimeFormat(period));
  count = count + 1;
  period = 0;
  renderPeriod(period);
});

$resetButton.on('click', function() {
  total = 0;
  period = 0;
  count = 1;
  renderTatal(total);
  renderPeriod(period);
  $resetButton.addClass('hidden');
  $splitButton.removeClass('hidden').addClass('btn-disabled').prop('disabled', true);
});


