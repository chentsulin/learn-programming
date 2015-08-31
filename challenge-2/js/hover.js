$('.hover-target')
  .on('mouseenter', addClassToTarget)
  .on('mouseleave', removeClassFromTarget);

function addClassToTarget() {
  $(this).addClass('active');
}

function removeClassFromTarget() {
  $(this).removeClass('active');
}
