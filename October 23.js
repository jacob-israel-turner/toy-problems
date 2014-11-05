/* We are given 3 strings: str1, str2, str3.
Str3 is said to be a shuffle of str1 and str2 if it can be formed by
interweaving the characters of str1 and str2 in a way
 that maintains the left-to-right ordering of the characters from each string.
 For example, given str1='abc' and str2='def', str3='dabecf' is a valid shuffle
 since it preserves the character ordering of the two strings.
 So, given these 3 strings, write a function that detects whether str3
 is a valid shuffle of str1 and str2. */


var interWeave = function (str1, str2, str3) {
    for (var i = 0; i < str3.length; i++) {
        var current = str3[i];
        var str1Index = str1.indexOf(str3[i]);
        var str2Index = str2.indexOf(str3[i]);
        if (str1Index === -1 && str2Index === -1) {
            return false;
        } else if (str1Index !== -1) {
            if (lastFirstIndex && lastFirstIndex > str1Index) {
                return false;
            }
            var lastFirstIndex = str1Index;
        } else if (str2Index !== -1) {
            if (lastSecondIndex && lastSecondIndex > str2Index) {
                return false;
            }
            var lastSecondIndex = str2Index;
        }
    }
    return true;
};

var string1 = 'abc',
    string2 = 'def',
    string3 = 'dabecf';

alert(interWeave(string1, string2, string3));