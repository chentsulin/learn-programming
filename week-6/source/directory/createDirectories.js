var mkdirp = require('mkdirp');

mkdirp('resource/inner', function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success');
});
