// http://jsfiddle.net/Kajdav/phn3vmcc/1/

var evenOccurence = function (arr) {
    var obj = [];  //
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i !== j && obj.indexOf(arr[i]) === -1 && arr[i] === arr[j]) {
                obj.push(arr[i]);
            }
        }
    }
    for (var k = 0; k <  obj.length; k++) {
        var counter = 0;
        for (var l = 0; l < arr.length; l++) {
            if (obj[k] === arr[l]) {
                counter++;
            }
        }
        if (counter % 2 === 0) {
            return obj[k];
        }
    }
    return false;
}

alert(evenOccurence(['dog', 'dog', 'cat', 'dog', 'cat', 'fish', 'fish']))