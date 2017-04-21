 var showImages = function(data, index) {
 	var result = document.querySelector('#result');
 	var image = document.createElement('img');
 	image.src = data.results[index].url;
 	image.className = 'img-thumbnail';
 	result.appendChild(image);
 };

var initLoad = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);
			var index = Math.floor(Math.random() * data.results.length);
			showImages(data, index);
		}
	};
	xhr.send();
}

initLoad();