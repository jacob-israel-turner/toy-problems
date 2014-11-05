var numberInSequence = 100;
var findNumberInSequence = 5;

var fibonacci = function (x) {
    var array = [];
    var y = 0;
    var z = 1;
    array.push(y, z);
    var a = 0;
    for (x; x >= 0; x--) {
        a = y + z;
        array.push(a);
        y = z;
        z = a;
    }
    return array;
};

//OR

var fibonacci2 = function(x) {
    var array = [0, 1];
    for (var i = 0; i <= x; i++) {
        array.push(array[array.length-1] + array[array.length-2])
    }
    return array;
}
alert(fibonacci2(100));


alert(fibonacci(numberInSequence));
var findInFibonacci = function (fib, find) {
    if (fibonacci(fib).indexOf(find) !== -1) {
        return 'True!  Index of "' + find + '" is: ' + fibonacci(fib).indexOf(find);
    } else {
        return false;
    }
};
alert(findInFibonacci(numberInSequence, findNumberInSequence));