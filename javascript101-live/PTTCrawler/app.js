var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request({
	uri: 'https://www.ptt.cc/bbs/Soft_Job/index.html',
	method: 'GET'
}, function(error, response, body) {
	if(error) {
		return;
	}
	var $ = cheerio.load(body);

	var results = [];
	var titles = $('.r-ent a');
	// console.log(title);
	for(var i = 0; i < titles.length; i++) {
		results.push({ title: $(titles[i]).text(), link: $(titles[i]).attr('href')});
	} 
	console.log(results);
	fs.writeFileSync('results.json', JSON.stringify(results));
});

