// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var request = require('request');

var luckybtn = document.getElementById('luckybtn');

luckybtn.addEventListener('click', function() {
	request({
		uri: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/500/1',
		method: 'GET'
	}, function(error, response, body) {
		//console.log(body);
		var data = JSON.parse(body);
		var index = Math.floor(Math.random() * data.results.length) // (0 - 1) * 467 -> 0....466

		var result = document.getElementById('result');
		var strHTML = '<img class="thumbnail" src="' + data.results[index].url +'" alt="" />';
		result.innerHTML = strHTML; 
	});
});