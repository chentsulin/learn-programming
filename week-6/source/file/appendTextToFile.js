var fs = require('fs');


fs.appendFile('resource/file1.txt', i + '. Annie\nIris\n', function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});

