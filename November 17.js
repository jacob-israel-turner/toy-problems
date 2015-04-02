//Write a function that console.logs numbers from 1 to 100.
//But for multiples of 3, print 'fizz',
//For multiples of 5, print 'buzz',
//and for multiples of both 3 and 5, print 'fizz buzz'.

function fizzBuzz(num){
	for (var i = 0, len = num - 1; i <= len; i++) {
		if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) console.log('fizz buzz');
		else if ((i + 1) % 3 === 0) console.log('fizz');
		else if ((i + 1) % 5 === 0) console.log('buzz');
		else console.log(i + 1);
		num--;
	};
}
fizzBuzz(100);