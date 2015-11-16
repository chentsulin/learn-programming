var fs = require('fs');

fs.writeFile('resource/file1.txt', 'Marshall\nMarshall\nMarshall\n', function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('success!');
});

