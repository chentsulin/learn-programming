$rects = $('.rectangle');

$rects.on('click', function() {
  $this = $(this);
  if ($this.hasClass('active')) {
    $this.removeClass('active');
  } else {
    if ($rects.hasClass('active')) {
      $rects.filter('.active').removeClass('active');
    }
    $this.addClass('active');
  }
})
