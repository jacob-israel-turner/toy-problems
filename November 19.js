//Create a delegate function here:
function delegate(child) {
    return function anon() {
        var childObj = this[child];
        for (var key in this) {
            if(this[key] === anon){
                return childObj[key].apply(childObj, arguments);
            }
        }
    }
}
//^^This solution was made by Tyler McGinnis, not me.

// DON'T TOUCH ANY CODE BELOW THIS
var obj = {
    math: {
        x: 2,

        add: function (y) {
            return this.x + y;
        },

        multiply: function (y) {
            return this.x * y;
        }
    },
    add: delegate('math'),
    multiply: delegate('math')
};

console.log(obj.add(1)) // 3
console.log(obj.multiply(3)) // 6
//console.log(obj.add)
//console.log(obj.multiply)
//console.log(obj)