var fs = require('fs');

fs.rename('resource/inner', 'resource/inner2', function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success');
});
