export { makeArray, Link, heapify, bubbleUp, bubbleDown, s, diff, isSorted };

function makeArray(size, range){
	var arr = [];
	for(var i = 0; i <  size; i++){
		arr.push(Math.floor(Math.random() * (range || size)));
	};
	return arr;
}

function Link(){
	this.start = null;
	this.end = null;
}

Link.prototype.add = function(item, order){
  // http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html 	
	var newItem = {
		data: item,
		next: null
	}
	if(order && this.start){
				
		var point = this.traverse(item, this.start);
	

		if(point){
			var temp = point.next;
			point.next = newItem;
			newItem.next = temp;
		} else {
			var temp = this.start.next;
			this.start = newItem;
			// newItem.next = temp;
			this.start.next = temp || this.end; // When inserting a new 'next' into a single-item linked list,
				// This will prevent this.start.next from being null, when there is a second item.
		}

		if(point === this.end) {	
			this.end = newItem;
		}

	} else {
		if(this.end){
			this.end.next = newItem;
			this.end = newItem;
		} else {
			this.start = newItem;
			this.end = newItem;
		}
	}
	return newItem;

};

Link.prototype.traverse = function(x, y){
	
	// This function will return the item before
	// the first item that x is bigger than
	// Or null if it is not bigger than anything
	// Allowing you to insert item in the linked list in order

	y = y || this.start;

	if(!y) return null;


	if(y === this.start){
		if(x < y.data){
			return null;
		}
	}

	if(y === this.end){
		return y;
	}

	if(y.next === null) {
		/*
		 * line 84 is throwing an error very infrequently.
		 * 'this' just before it errors out looks like so:
		 * { start: { data: 0, next: null }, end: { data: 1, next: null } }
		 */
		console.log(this);
		console.log(y, this.end)
	};

	if(x < y.next.data) {
		return y;
	} else {
		return this.traverse(x, y.next);
	}
}


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

