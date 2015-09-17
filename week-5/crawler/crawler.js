var request = require('superagent');
var cheerio = require('cheerio');

request
  .get('http://udn.com/news/story/7266/1192216-%E6%90%96%E4%B8%8D%E5%81%9C%EF%BC%81%E8%8A%B1%E8%93%AE%E8%BF%91%E6%B5%B7-24%E5%B0%8F%E6%99%8231%E9%9C%87')
  .end(function(error, response) {
    if (response.ok) {
      var result = parse(response.text);
        console.log(result);
    } else {
        console.log('Oh no! error ' + response.text);
    }
  });

function parse(html) {
  $ = cheerio.load(html);
  var title = $('#story_art_title').text();
  var paragraph = $('#story_body_content').find('p').text();
  return {
    title: title,
    paragraph: paragraph
  };
}
