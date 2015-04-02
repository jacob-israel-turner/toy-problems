

function medianSort(arr){
	var hash = arr.reduce(function(prev, next, i, arr){
		if(!prev[next]) prev[next] = i;
		return prev;
	}, {});
	median = findMedian(hash);
	
	sort(arr, hash.median);


	function sort(arr, med){
		arr.forEach(function(item, ind){
			if(ind < med && item > arr[med]) {
				arr.splice(ind, 1);
				arr.push(item);
				return;
			}
			if(ind > med && item < arr[med]) {
				arr.splice(ind, 1);
				arr.unShift(item);
				return;
			}
			return arr;
		});
	}
	
	function findMedian(obj){
		var highLow =  Object.keys(obj).reduce(function(prev, next){
			next = Number(next);
			if((!prev.low && prev.low !== 0) || prev.low > next) {
				prev.low = next;
			}
			if((!prev.high && prev.high !==0) || prev.high < next){
				prev.high = next;
			}
			return prev;
		}, {});
		highLow.median = {
			val: Math.floor((highLow.high - highLow.low) / 2),
			ind: -1
		}
		console.log(highLow.median);
		highLow.median = 	Object.keys(obj).reduce(function(prev, next, i){
			next = Number(next);
			// console.log('current: ', prev);
			// console.log('TESTING: ', prev.val, 'AGAINST', next);
			// console.log(diff(highLow.median.val, prev.val));
			// console.log(diff(highLow.median.val, next));
			// console.log('Result: ', diff(highLow.median.val) > diff(highLow.median.val, next));
			// console.log('============');
			// console.log(highLow.median.ind === -1);
			// console.log(diff(highLow.median, prev.val), diff(highLow.median, next));
			if(prev == 1 || diff(highLow.median.val, prev.val) > diff(highLow.median.val, next)){
				// console.log('passed');
				return { val: next, ind: i };
			};
			return prev;
		});
		return highLow.median;
	};
	
	function diff(a, b){
		return Math.abs(Number(a) - Number(b));
	}

	return median;
};

console.log(medianSort([1,6,4,12,8,2,3,2,3,6,5]));



function insertSort(arr){
  for(var i = 1; i < arr.length; i++){
		var j = i
		while(j >= 0 && arr[j] < arr[j-1]){
			console.log(i, j);
			s(arr, j, j-1);
			j--;
		}
	}
	return arr;
}

// console.log(insertSort([2,6,5,7,4,3,4]));

function s(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
