//Recursion, with Jenn Siepert

function fact(n){
	if(n < 1) return 1; //base case.  This is what makes the recursion turn around and start working back up.
	return n*fact(n-1);
}

function bunnyEars(n){
	if(n < 1) return 0;
	if(n % 2 === 0 ) return 2 + bunnyEars(n-1);
	return 3 + bunnyEars(n-1);
}

function fib(n){
	if(n === 1 || n === 2) return n-1;
	return fib(n-1) + fib(n-2);
} //returns the fibonnaci number at nth place

function power(b, p){
	if(p<1) return 1;
	return b * power(b, p-1);
}

function maleify(str){
	if(str.length < 1) return '';
	if(str[0] === 'x') return 'y' + maleify(str.slice(1));
	return str[0] + maleify(str.slice(1));
}

function genderless(str){
	if(str.length < 1) return ''
	if(str[0] === 'x') return '' + genderless(str.slice(1));
	return str[0] + genderless(str.slice(1));
}



//mergeSort function.
var array = [2, 3, 5, 1, 6, 7, 8];

function mergeSort(arr){
	if(arr.length<=1) return arr;
	half = Math.round((arr.length)/2);
    var left = arr.slice(0, half);
    var right = arr.slice(half);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var newArr = [];
	while(left.length && right.length){
		if(left[0]<right[0]){
			newArr.push(left.shift());
		} else{
			newArr.push(right.shift());
		}
	}
	while(left.length){
		newArr.push(left.shift());
	}
	while(right.length){
		newArr.push(right.shift());
	}
	return newArr;
}