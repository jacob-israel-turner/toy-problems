var flatten = function (array) {
    var flatArray = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            var newArray = flatten(array[i]);
            for (var j = 0; j < newArray.length; j++) {
                flatArray.push(newArray[j]);
            }
        } else {
            flatArray.push(array[i]);
        }
    }
    return flatArray;
};
console.log(flatten([1, 2, [3, [4, 5, 5, 8, 7, [6, 5, 4]], 5, 6], 7]));