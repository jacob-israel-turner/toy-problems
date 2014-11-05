function nonRepeating(str) {
	for (var i = 0; i < str.length; i++) {
	var test = false;
		for(var j = 0; j < str.length; j++) {
			if(i !== j && str[i] === str[j]) {
			test = true;
			}
		}
		if (test === false) {
		return str[i];
		}
	}
}
var testString = 'abcdddeft';
alert(nonRepeating(testString));