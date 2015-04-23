import consoleTime from 'console-time'; 
import { Link, heapify, bubbleUp, bubbleDown, s, diff, isSorted } from './utils.js';


/*
var myLink = new Link();
myLink.add(1);
myLink.add(3);
myLink.add(5);
myLink.add(10, true);
myLink.add(4, true);
console.log(myLink.start.next);
*/

/*
setTimeout(function(){
	console.log('RESULT:', result);
}, 1000);
*/

var t =  consoleTime.run;

var myAlgos = [insertSort, quickSort, heapSort, countingSort];

var options = {	
	max: 100000,
	steps: 10
}

// console.log(t(myAlgos, options));

t(bucketSort, options);
// t(quickSort, options);
// t(heapSort, options);
// t(countingSort, options);
// t(bucketSort, options);

/*
var testArr = [];
for(var i = 0; i < 100; i++){
	testArr.push(Math.floor(Math.random() * 100));
}
*/

// console.log(bucketSort(testArr));
// console.log(countingSort(testArr));
// console.log(heapSort([1,6,3,14,19,3,20,10,8,1,1,2,12]));
// console.log(medianSort([1,6,4,12,8,2,3,2,3,6,5]));
// console.log(insertSort([2,6,5,7,4,3,4]));
// console.log(quickSort([4,2,6,7,3,4,5,3,7]));


function bucketSort(arr){

	/*
	 * It's not working.
	 * I think 'concatLinkList' is only returning one
	 * value instead of the array of items.
	 */


	if(arr.length <= 1) return arr;
	var buckets = disperse(arr, makeBucketArray(arr.length));


	var sortedArray = [];

	for(var i = 0; i < buckets.length; i++){
		sortedArray.push(concatLinkList(buckets[i]));
	}

	/*
	return buckets.reduce(function(prev, next){
		var res = prev.concat(concatLinkList(next));	
	  // console.log('RESULT', res);
		return res;	
	}, []);
	*/


	/*
	return buckets.reduce(function(prev, next){
		return prev.concat(next);							 
	}, []);
	*/


 function concatLinkList(obj){
	var arr = [];
	if(obj.data || obj.data === 0) arr.push(obj.data);
	if(!obj.start && ( !obj.data && obj.data !== 0 )) return arr;
	if(obj.start) return arr.concat(concatLinkList(obj.start));
	if(obj.next) return arr.concat(concatLinkList(obj.next));
	else return arr;
 };

	/*
	function trimBuckets(arr){
		return arr.filter(function(item, ind){
			return item.length > 0;
		})
	}
*/

	function makeBucketArray(n){
		var buckets = [];
		for(var i = 0; i < n; i++){
			buckets.push(new Link());
		};
		return buckets;
	}


	function disperse(arr, buckets){
		for(var i = 0; i < arr.length; i++){
			// buckets[linkIndex(arr[i], arr.length)].push(arr[i]);
			
			// buckets[linkIndex(arr[i], arr.length)] = insert(arr[i], buckets[linkIndex(arr[i], arr.length)]);
			// console.log(buckets);
			buckets[linkIndex(arr[i], arr.length)].add(arr[i], true);
		};
		return buckets;
	}

	function insert(item, arr){
		var i = 0;
		do {
			if(item < arr[i]) {
				arr.splice(i, 0, item);
				break;
			}
			else if(i >= arr.length - 1){
				arr.push(item);	
				break;
			}
			i++;
		} while (i < arr.length);
		return arr;
	}

	function linkIndex(x, n, max){
		//src: https://www.cs.usfca.edu/~galles/visualization/BucketSort.html
		return Math.floor((x * n) / ((max || n) + 1));
	}

	/*
	function msbits(x, k){
		//src: http://en.wikipedia.org/wiki/Bucket_sort
		return x * Math.floor(x / Math.pow(2, (x-k)));
	}
	*/

};


function countingSort(arr){

	return buildSortedArr(arr, buildCount(arr, findLargest(arr).num));


	function buildSortedArr(arr, count){

		var sortedArr = [];

		for(var i = 0; i < arr.length; i++){
			sortedArr.push(0);
		}

		for(var i = 0; i < arr.length; i++){
			sortedArr[count[arr[i]]] = arr[i];
			count[arr[i]]--;
		}
		return sortedArr;
	}

	function buildCount(arr, largest){
		var countArr = [];
		for(var i = 0; i < largest + 1; i++){
			countArr.push(0);
		}
		for(var i = 0; i < arr.length; i++){
			countArr[arr[i]]++;
		}
		for(var i = 0; i < countArr.length; i++){
			countArr[i] += countArr[i - 1] || 0;
		}
		return countArr;
	}

	function findLargest(arr){
		var largest = {
			num: null,
			index: null			
		};
		for(var i = 0; i < arr.length; i++){
			if((!largest.num && largest.num !== 0) || arr[i] > largest.num) {
				largest.num = arr[i];
				largest.index = i;
			}
		}
		return largest
	}
}


function heapSort(arr){
	var sortedArr = [];
	arr = heapify(arr);
	while(arr.length > 0){
 		s(arr, 0, arr.length-1);
 		sortedArr.unshift(arr.splice(arr.length-1, 1)[0]);
 		bubbleDown(0, arr);
	};
	return sortedArr;
};


function quickSort(arr){	

	/*
	 * Future optimizations:
	 * - Choose median by 'median of 3' method
	 * - Use insertionSort for arrays of a smaller size
	 */


	if(arr.length <= 1 || arr.every(allTheSame)) return arr;
	var partitions = partition(arr, findPivot(arr.length));

	/*
	// This was the old way of doing things.  It gave my quadratic(?) runtime with
	// absolutely terrible overhead.  It was worse than the insertion sort.
	// Removing these nested high-order functions (or, loops) fixed all
	// my problems.
	return partitions.reduce(function(prev, next, ind){
		return prev.concat(quickSort(next).reduce(concat, []));
	}, []);
	*/
	
	return sort(partitions);

	function sort(arr){
		var newArr = [];
		arr.forEach(function(item, ind, arr){
			var sorted = quickSort(item);
			newArr = newArr.concat(sorted);
		});
		return newArr;
	};

	/*
	function concat(prev, next){
		return prev.concat(next);
	};
	*/
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


