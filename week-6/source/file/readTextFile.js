var fs = require('fs');

fs.readFile('resource/file1.txt', 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
