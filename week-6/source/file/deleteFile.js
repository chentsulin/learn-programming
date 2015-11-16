var fs = require('fs');

fs.unlink('resource/file1.txt', function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});
