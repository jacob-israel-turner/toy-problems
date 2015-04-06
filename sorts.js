import consoleTime from 'console-time'; 

var t =  consoleTime.run;

var myAlgos = [insertSort, quickSort];

t(myAlgos, 100000, 10);


// console.log(medianSort([1,6,4,12,8,2,3,2,3,6,5]));
// console.log(insertSort([2,6,5,7,4,3,4]));
// console.log(quickSort([4,2,6,7,3,4,5,3,7]));

function quickSort(arr){	
	if(arr.length <= 1 || arr.every(allTheSame)) return arr;
	var partitions = partition(arr, findPivot(arr.length));

	return partitions.map(function(item, ind){
		return quickSort(item).reduce(concat, []);
	}).reduce(concat, []);

	
	function concat(prev, next){
		return prev.concat(next);
	};
	function partition(arr, pivot){
		var first = arr.filter(function(item, ind){
			return (item <= arr[pivot]);
		});
		var second = arr.filter(function(item, ind){
			return (item > arr[pivot]);	
		})
		return [first, second];
	};

	function allTheSame(item, ind){
		return item === arr[0];
	}

	function findPivot(n){
		return Math.floor(Math.random() * n);
	}
	return arr;
};


function medianSort(arr){
	
	/*
	 * I've essentially given up on the medianSort for now.  I cannot fathom
	 * how to find the median element without first sorting the array.
	 * I've found a few examples in c++ of finding the median in linear time,
	 * but they're a little over my head right now.  I'll learn quicksort
	 * and then come back to this.
	 *
	 */
	
	var hash = arr.reduce(function(prev, next, i, arr){
		if(!prev[next]) prev[next] = i;
		return prev;
	}, {});
	median = findMedian(hash);	
	
	/*
	arr.splice(median.ind, 1);
	median.ind = Math.floor(arr.length/2);
	arr.splice(median.ind, 0, median.val);
	arr = sort(arr, median.ind);
	

	function sort(arr, med){

		return arr.reduce(function(prev, item, ind, arr){
			if(ind === med) return prev;
			if(item > arr[med]) {
				// arr.splice(ind, 1);
				prev.push(item);
			}
			else{
				// arr.splice(ind, 1);
				prev.unshift(item);
			}
			return prev;
		}, [arr[med]]);
		return arr;
	}
	*/
	function findMedian(obj){
		

		/*
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
		highLow.median = 	Object.keys(obj).reduce(function(prev, next, i){
			next = Number(next);
			if(prev == 1 || diff(highLow.median.val, prev.val) > diff(highLow.median.val, next)){
				return { val: next, ind: obj[next] };
			};
			return prev;
		});
		return highLow.median;
	  */
	};
	
	function diff(a, b){
		return Math.abs(Number(a) - Number(b));
	}

	return arr;
};

function insertSort(arr){
  for(var i = 1; i < arr.length; i++){
		var j = i
		while(j >= 0 && arr[j] < arr[j-1]){
			s(arr, j, j-1);
			j--;
		}
	}
	return arr;
}

function s(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
