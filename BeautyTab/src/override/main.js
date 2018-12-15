function showImages(data, index) {
	var result = document.getElementById('result');
	var image = document.createElement('img');
	image.src = data.results[index].url;
	image.className = 'thumbnail';
	result.appendChild(image);
}

function initLoad() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);
			var index = Math.floor(Math.random() * data.results.length);
			console.log(data);
			showImages(data, index);
		}
	};
	xhr.send();
}

initLoad();