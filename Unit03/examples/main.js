/* 變數

1. 變數是一個暫時儲存資料的盒子

2. 顧名思義是一個裡面內容是可以『變』的

3. 當我們宣告一個變數時，系統會配置一塊記憶體區塊給它，而因為資料型別（數字、字串）不同，配置大小也有所不同

4. 變數名稱可以使用大小寫字母、數字和 _ 、英文大小寫字母視為不同變數，注意不要使用到 JavaScript 保留字（Ex. if, function）

var name = 'Eric';
name = 'Amy';

var a = 1;
b = a;

b += 1; 

console.log(name);


const PI = '3.1415';

console.log(PI);

*/

/* 
資料型別：基本資料型態：1. number, 2. string 3. boolean 4. null 5. undefined 複合： 物件 
console.log(typeof name);
*/



/* 運算式和運算子
指定資料做哪一種運算的是運算子，進行運算的資料稱為運算元

1. 賦值
var result = 0;

2. 算術

result = 1 + 2;
console.log(result);

3. 邏輯

var isTrue = true && true;

4. 關係

var outcome = 1 > 2;


*/



/* 

條件判斷

var grade = 70;

if(grade >= 90 && grade < 100) {
	console.log('A');
} else if(grade >= 80 && grade < 90) {
	console.log('B');
} else {
	console.log('C');
}

*/



/* 
迴圈

for(var i = 1; i < 11; i++) {
	console.log(i); // 1...10 
}

var i = 1;
while(i < 11) {
	console.log(i);
	i += 1;
}

do {
	console.log(i);
	i += 1;	
} while(i < 1);

*/


/* 函式：區域變數、全域變數

function sum(a, b) {
	var name = 'eric';
	return a + b;
}

var sum = function(a, b) {
	return a + b;
};

sum(1, 2);

console.log(name);

*/

/* 陣列與物件：儲存資料的結構，物件則是對應到真實世界


var languages = ['JavaScript', 'Python', 'Java'];
languages[0]
languages.push('Swift');

console.log(languages);

var p1 = {
	name: '志明'
};

console.log(p1.name); // "志明"

var p2 = p1;
p2.name = '春嬌';
console.log(p2.name); // "春嬌"
console.log(p1.name); // "春嬌"

var annie = {
	name: 'annie',
	wow: function() {
		console.log('yami');
	}
}

function Cat(name) {
	this.name = name;
	this.wow = function() {
		console.log('yami');		
	}
}

var annie = new Cat('annie');

*/


/* 事件處理：綁定事件，回應事件

btn.addEventListener('click', function() {
	alert('click!');
});
*/

/* 非同步處理，JSON
var xhr = XMLHttpRequest();
xhr.open('GET', 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1');
xhr.onreadystatechange = function() {
	var data1 = JSON.parse(xhr.responseText);
	console.log(xhr.responseText);
	console.log(data1);

	var data2 = JSON.stringify({ name: 'amy' });
	console.log(data);
};
xhr.send();
*/


