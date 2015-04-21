export { heapify, bubbleUp, bubbleDown, s, diff, isSorted };

function heapify(arr){
	var heap = [];
		for(var i = 0; i < arr.length; i++){
			var currentInd = heap.push(arr[i]) - 1;
			if(currentInd <= 0) continue;
			heap = bubbleUp(currentInd, heap);
		};
	return heap;
}

function bubbleUp(ind, arr){
		var parentInd = Math.floor((ind - 1) / 2);
			if(arr[ind] > arr[parentInd]){
				s(arr, ind, parentInd);
				bubbleUp(parentInd, arr);
			}
	return arr;
}

function bubbleDown(ind, arr){
	var left = 2 * ind + 1;
	var right = 2 * ind + 2;
	
		var largest = ind;

	/*
	if(arr[ind] < arr[left] || arr[ind] < arr[right]){
		arr[left] > arr[right] ? s(arr, ind, left) : s(arr, ind, right);
	}
	*/

	if(arr[left] > arr[ind] && arr[left] > arr[right]){
		largest = left;
	} else if(arr[right] > arr[ind] && arr[right] > arr[left]){
		largest = right;
	};
	if(largest !== ind){
		s(arr, ind, largest);
		bubbleDown(largest, arr);
	};
}

function s(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

function diff(a, b){
	return Math.abs(Number(a) - Number(b));
};

function isSorted(arr){
	return arr.every(function(item, ind, arr){
		if(ind === arr.length - 1) return true;
		return item <= arr[ind + 1];
	});
}

