//Create a function that tests a certain string.  If each letter within the function is not surrounded with '+' symbols, then return false.  Otherwise, return true.


function simpleSymbols(str) {
    var test = true;
    for (var i = 0; i < str.length; i++) {
        // alert(str[i]);
        if ('abcdefghijklmnopqrstuvwxyz'.indexOf(str[i]) !== -1) {
            var plusTest = function () {
                alert(str[i]);
                //alert(str[i - 1]);
                //alert(str[i + 1]);
                var left = false;
                var right = false;
                if (str[i - 1] === '+') {
                    left = true;
                }
                if (str[i + 1] === '+') {
                    right = true;
                }
                if (left === false || right === false) {
                    test = false;
                }
                if (test === false) {
                    return false;
                }
            };
            if (plusTest() === false) {
                return false;
            }
        }
    }
    if (test === true) {
        return true;
    }
}
alert(simpleSymbols('+ig+ 09840+a+'));