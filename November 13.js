/*
var counter = count();
counter(); //1
counter(); //2
counter(); //3
counter(); //4
counter(); //5

counter(); //15
counter(); //16
counter(); //17
counter(); //18
counter(); //19
counter(); //20

counter(); //30
counter(); //31
*/

function count(){
	var x = 0;
	var y = 0;
	return function(){
		var newY = Math.floor(x / 5) * 10;
		if(newY === y) x++;
		y = newY;
		return x + y;
	}
}
var counter = count();