import { run } from 'console-time';

// var t = consoleTime.test;

run(replace, 1000000, 10);

function replace(str){
	if(!Array.isArray(str)) str = str.split('');
	for(var i = 0; i < str.length; i++){
		if(str[i] % 2 === 1) str[i] = 'o';
	};
	return str.join('');
};

// console.log(replace('123456787876567'));
