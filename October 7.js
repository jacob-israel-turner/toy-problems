//return whatever is in between the two parenthesis

var myFunction = function (string) {
    var firstParen = 0;
    var secondParen = 0;
    for (var i = 0; i < string.length; i++) {
        if (firstParen === 0) {
            if (string[i] === "(") {
                firstParen = i;
            }
        }
        if (string[i] === ")") {
            secondParen = i;
        }
    }
    if (firstParen === 0 && secondParen === 0) {
        return false;
    } else {
        return string.slice(firstParen, secondParen + 1);
    }
};
alert(myFunction('abc123def'));