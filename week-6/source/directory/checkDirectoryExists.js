var fs = require('fs');

fs.stat('resource/inner', function(err, stats) {
  if (err) {
    console.log('directory does not exist!');
    return;
  }
  if (stats.isDirectory()) {
    console.log('directory exists!');
  } else {
    console.log('directory does not exist!');
  }
});
