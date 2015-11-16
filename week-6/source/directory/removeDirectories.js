var rimraf = require('rimraf');

rimraf('resource/inner', function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success');
});
