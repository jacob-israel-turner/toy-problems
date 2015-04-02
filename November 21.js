var myArray  = ['T', 'y', 'l', 'e', 'r'];
var nums = [1, 2, 3, 4, 5, 6, 7]

//Array.prototype.unsplit = Array.prototype.join;

Object.defineProperty(Array.prototype, 'unsplit', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: function(joiner){
        var joined = ""
        for(var i = 0, len = this.length; i < len; i++){
            if(joined) joined = joined + joiner + this[i];
            else joined = joined + this[i]
        }
        return joined;
    }
})

console.log(myArray.unsplit('')); //'Tyler'
console.log(nums.unsplit('*')); //'1*2*3*4*5*6*7'