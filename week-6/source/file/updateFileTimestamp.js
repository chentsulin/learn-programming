var touch = require('touch');

touch('resource/file1.txt', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});
