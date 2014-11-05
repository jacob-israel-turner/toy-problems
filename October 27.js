//write a function that takes a string as an argument and determines whether or not the given string is a palindrome.
//example of a palindrome: Acrobats stab orca

var isPalindrome = function(str) {
    str = str.split(' ').join('').toLowerCase();
    var first = '';
    var second = '';
    if(str.length % 2 === 0) {
        var mid = (str.length/2);
        first = str.slice(0, mid);
        second = str.slice(mid);
        second = second.split('').reverse().join('');
        if(first === second) return true;
        return false;
    } else {
        var mid = (str.length/2);
        first = str.slice(0, mid + 1);
        second = str.slice(mid);
        second = second.split('').reverse().join('');
        if(first === second) return true;
        return false;
    }
}

or

var isPalindrome2 = function(str) {
    str = str.toLowerCase().split(' ').split('';)
    return str === str.split('').reverse().join('')
}

isPalindrome('Anmna');


console.log(isPalindrome("Anna")); //true
console.log(isPalindrome("Hello World")); //false
console.log(isPalindrome("Amen icy cinema")); //true