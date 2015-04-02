//Given an integer array, one element occurs an even number of times and all
//others have odd occurrences.  Find the element with even occurrences.


var findEven = function (arr) {
    var countObj = {};
    for (var i = 0; i < arr.length; i++) {
        if (countObj.hasOwnProperty(arr[i])) {
            for (var key in countObj) {
                if (Number(key) === arr[i]) {
                    countObj[key] += 1;
                }
            }
        } else {
            countObj[arr[i]] = 1;
        }
    }
    return evenify(countObj);
};

var evenify = function(obj) {
    for (var key in obj) {
        if(obj[key] % 2 === 0) {
            return key;
        }
    }
}

var array = [1, 2, 3, 3, 3, 4, 4, 5, 6];

console.log(findEven(array));